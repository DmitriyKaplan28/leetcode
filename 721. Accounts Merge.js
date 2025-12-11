/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  const n = accounts.length;

  const parent = Array.from({ length: n }, (_, i) => i);

  const find = (x) => {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  };

  const union = (x, y) => {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX !== rootY) {
      parent[rootY] = rootX;
    }
  };

  const emailToAccount = new Map();

  for (let i = 0; i < n; i++) {
    for (let j = 1; j < accounts[i].length; j++) {
      const email = accounts[i][j];
      if (emailToAccount.has(email)) {
        union(emailToAccount.get(email), i);
      } else {
        emailToAccount.set(email, i);
      }
    }
  }

  const accountEmails = new Map();
  for (let i = 0; i < n; i++) {
    const root = find(i);
    if (!accountEmails.has(root)) {
      accountEmails.set(root, new Set());
    }
    for (let j = 1; j < accounts[i].length; j++) {
      accountEmails.get(root).add(accounts[i][j]);
    }
  }

  const result = [];
  for (const [accountIdx, emailSet] of accountEmails) {
    const name = accounts[accountIdx][0];
    const emails = Array.from(emailSet).sort();
    result.push([name, ...emails]);
  }

  return result;
};
