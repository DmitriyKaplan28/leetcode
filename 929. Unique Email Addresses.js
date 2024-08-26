/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const uniques = {};
  emails.forEach((email) => {
    const [local, domain] = email.split("@");
    uniques[
      `${local.split("+")[0].replaceAll(".", "")}@${domain}`
    ] = 1;
  });

  return Object.keys(uniques).length;
};
