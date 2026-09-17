/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function (data) {
  let remainingBytes = 0;

  for (const value of data) {
    const byte = value & 0xff;

    if (remainingBytes > 0) {
      if ((byte & 0xc0) !== 0x80) return false;
      remainingBytes--;
      continue;
    }

    if ((byte & 0x80) === 0) continue;
    if ((byte & 0xe0) === 0xc0) {
      remainingBytes = 1;
    } else if ((byte & 0xf0) === 0xe0) {
      remainingBytes = 2;
    } else if ((byte & 0xf8) === 0xf0) {
      remainingBytes = 3;
    } else {
      return false;
    }
  }

  return remainingBytes === 0;
};
