/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  return image.map((el) => {
    el.reverse();
    return el.map((subEl) => (subEl = subEl === 1 ? 0 : 1));
  });
};
