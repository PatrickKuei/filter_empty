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

describe("Real data", function () {
  it(`{
        level1: {
          level2: {
            level3: {
              key1: 'This value is ok',
              key2: null,
              key3: ['', null, 'This is also ok', {
                level4: {
                  key4: 'This is another ok',
                  key5: null
                }
              }],
            },
          },
        },
      }`, function () {
    assert.deepEqual(
      filterEmpty({
        level1: {
          level2: {
            level3: {
              key1: "This value is ok",
              key2: null,
              key3: [
                "",
                null,
                "This is also ok",
                {
                  level4: {
                    key4: "This is another ok",
                    key5: null,
                  },
                },
              ],
            },
          },
        },
      }),
      {
        level1: {
          level2: {
            level3: {
              key1: "This value is ok",
              key3: [
                "This is also ok",
                {
                  level4: {
                    key4: "This is another ok",
                  },
                },
              ],
            },
          },
        },
      }
    );
  });
});
