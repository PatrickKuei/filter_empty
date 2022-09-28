require("mocha");
const assert = require("assert");
const filterEmpty = require("./");

describe("Array", function () {
  it("[1]", function () {
    assert.equal(
      filterEmpty([1]).every((i) => !!i),
      true
    );
  });

  it("[1, undefined]", function () {
    assert.deepEqual(filterEmpty([1, undefined]), [1]);
  });
});

describe("Object", function () {
  it("{a: 1}", function () {
    assert.deepEqual(filterEmpty({ a: 1 }), { a: 1 });
  });

  it('{a: 1, b: ""}', function () {
    assert.deepEqual(filterEmpty({ a: 1, b: "" }), { a: 1 });
  });
});
