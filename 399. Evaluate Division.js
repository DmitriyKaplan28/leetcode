/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const parent = new Map();
  const weight = new Map();

  function find(x) {
    if (!parent.has(x)) {
      parent.set(x, x);
      weight.set(x, 1.0);
      return x;
    }
    if (parent.get(x) !== x) {
      const root = find(parent.get(x));
      weight.set(x, weight.get(x) * weight.get(parent.get(x)));
      parent.set(x, root);
    }
    return parent.get(x);
  }

  function union(x, y, value) {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX !== rootY) {
      parent.set(rootX, rootY);
      weight.set(rootX, (value * weight.get(y)) / weight.get(x));
    }
  }

  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i];
    const value = values[i];
    union(a, b, value);
  }

  const result = [];
  for (const [c, d] of queries) {
    if (!parent.has(c) || !parent.has(d)) {
      result.push(-1.0);
    } else if (find(c) !== find(d)) {
      result.push(-1.0);
    } else {
      result.push(weight.get(c) / weight.get(d));
    }
  }

  return result;
};
