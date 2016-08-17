var assert = chai.assert;

function bresenhams(x0, y0, x1, y1) {
  return [{
    x: x0,
    y: y0
  }];
}

function toArray(str) {
  var rows = str.match(/[^\r\n]+/g);
  var columns = Math.max(rows.map(function (r) {
    return r.length;
  }));

  var returnValue = matrix(columns, rows.length);
  for (var x = 0; x < columns; x++) {
    for (var y = 0; y < rows.length; y++) {
      returnValue[x][y] = x < rows[y].length ? rows[y][x] : ' ';
    }
  }
  return returnValue;
}

function arrayContains(array, predicate) {
  for (var item of array) {
    if (predicate(item)) {
      return true;
    }
  }
  return false;
}

function assertPointsEqual(strExpected, actual) {
  var expected = toArray(strExpected);
  for (var x = 0; x < expected.length; x++) {
    for (var y = 0; y < expected[0].length; y++) {
      assert.equal(expected[x][y] == ' ', !arrayContains(actual, function(item) {
        return item.x == x && item.y == y;
      }), `x: ${x}, y: ${y}`);
    }
  }
}

describe('Bresenhams', function() {
  it('should return single point for (0, 0) to (0, 0)', function() {
    assertPointsEqual('#', bresenhams(0, 0, 0, 0));
  });
});
