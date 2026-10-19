/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  products.sort();

  const suggestions = [];
  let prefix = "";
  let matches = products;

  for (const character of searchWord) {
    prefix += character;
    matches = matches.filter((product) => product.startsWith(prefix));
    suggestions.push(matches.slice(0, 3));
  }

  return suggestions;
};
