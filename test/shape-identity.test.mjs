import assert from 'node:assert/strict';
import test from 'node:test';

/**
 * A shape's IRI is `{baseUri}shape/{packageSlug}/{ShapeName}`, and the slug
 * comes from whichever `linkedPackage()` the `@linkedShape` decorator was
 * bound to — not from the npm name in package.json. When `src/package.ts`
 * re-exported core's decorators, `Image` registered as `shape/core/Image`
 * while every other signal in the repo said "dcmi". The IRI is persisted data
 * and `Server.call` routes on the package name inside it, so nothing in a
 * type-check or a build can catch this; only reading the id back off the built
 * class can.
 *
 * Runs against `lib/`, deliberately: the decorator only runs at runtime, so
 * the compiled artifact is the only thing that can answer the question.
 */

test('Image registers under the dcmi slug, not core', async () => {
  const {Image} = await import(
    new URL('../lib/esm/shapes/Image.js', import.meta.url)
  );
  assert.equal(Image.shape?.id, 'https://linked.cm/shape/dcmi/Image');
});

test('property shapes inherit the dcmi slug', async () => {
  const {Image} = await import(
    new URL('../lib/esm/shapes/Image.js', import.meta.url)
  );
  const propertyIds = (Image.shape?.propertyShapes ?? []).map((p) => p.id);
  assert.ok(propertyIds.length > 0, 'Image declares no property shapes');
  for (const id of propertyIds) {
    assert.ok(
      id.startsWith('https://linked.cm/shape/dcmi/Image/'),
      `property shape ${id} does not carry the dcmi slug`,
    );
  }
});
