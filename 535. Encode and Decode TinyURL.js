/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
  return TinyURL.encode(longUrl);
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  return TinyURL.decode(shortUrl);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

// Simple in-memory TinyURL service for this session
var TinyURL = (function () {
  var prefix = "http://tinyurl.com/";
  var storage = [];

  function encode(longUrl) {
    storage.push(longUrl);
    var id = storage.length - 1;
    return prefix + String(id);
  }

  function decode(shortUrl) {
    var idStr = shortUrl.slice(prefix.length);
    var id = parseInt(idStr, 10);
    return storage[id];
  }

  return { encode: encode, decode: decode };
})();
