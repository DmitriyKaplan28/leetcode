/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  const counts = new Map();

  for (const entry of cpdomains) {
    const [countStr, domain] = entry.split(" ");
    const count = Number(countStr);

    const parts = domain.split(".");
    for (let i = 0; i < parts.length; i++) {
      const sub = parts.slice(i).join(".");
      counts.set(sub, (counts.get(sub) ?? 0) + count);
    }
  }

  const res = [];
  for (const [domain, count] of counts.entries()) {
    res.push(`${count} ${domain}`);
  }
  return res;
};

console.log(subdomainVisits(["9001 discuss.leetcode.com"]));
console.log(
  subdomainVisits([
    "900 google.mail.com",
    "50 yahoo.com",
    "1 intel.mail.com",
    "5 wiki.org",
  ])
);
