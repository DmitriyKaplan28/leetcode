/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function (source) {
  const result = [];
  let inBlockComment = false;
  let currentLine = "";

  for (const line of source) {
    let i = 0;

    while (i < line.length) {
      if (inBlockComment) {
        if (line[i] === "*" && line[i + 1] === "/") {
          inBlockComment = false;
          i += 2;
        } else {
          i += 1;
        }
      } else {
        if (line[i] === "/" && line[i + 1] === "/") {
          break;
        }

        if (line[i] === "/" && line[i + 1] === "*") {
          inBlockComment = true;
          i += 2;
        } else {
          currentLine += line[i];
          i += 1;
        }
      }
    }

    if (!inBlockComment && currentLine.length > 0) {
      result.push(currentLine);
      currentLine = "";
    }
  }

  return result;
};
