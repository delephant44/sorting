describe("Split Array function", function() {
  it("is able to split an array into two halves", function() {
    expect(split([8, 2, 1, 9, 5, 6, 3])).toEqual([
      [8, 2, 1],
      [9, 5, 6, 3]
    ]);
  });
});

describe("Merge function", function() {
  it("is able to merge two sorted arrays into one sorted array", function() {
    expect(merge([], [])).toEqual([]);
    expect(merge([1, 2, 8], [3, 5, 6, 9])).toEqual([1, 2, 8, 3, 5, 6, 9]);
  });
});
