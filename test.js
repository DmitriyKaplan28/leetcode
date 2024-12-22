function allSettled(promises = []) {
  const res = new Array(promises.length);
  let count = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((prRes) => {
          res[index] = { status: "fulfilled", value: prRes };
        })
        .catch((err) => {
          res[index] = { status: "rejected", reason: err };
        })
        .finally(() => {
          count++;
          if (count >= promises.length) resolve(res);
        });
    });
  });
}






function retry(promiseFn, config) {
  const retryCount = 0;

  return new Promise((resolve, reject) => {
    handler();

    function errorHandler() {
      retryCount++;
      if (retryCount > config.count) {
        return reject(new Error("smth"));
      }
      setTimeout(() => {
        handler();
      }, config.delay(retryCount));
    }

    function handler() {
      try {
        promiseFn()
          .then((res) => resolve(res))
          .catch((err) => {
            errorHandler();
          });
      } catch {
        errorHandler();
      }
    }
  });
}





function toBinary(num) {
    let binary = '';
    while (num > 0) {
        binary = (num % 2) + binary;
        num = Math.floor(num / 2);
    }
    return binary || '0';
}



function isValidBrackets(str) {
    const stack = [];
    const pairs = { ')': '(', '}': '{', ']': '[' };
    for (let char of str) {
        if (['(', '{', '['].includes(char)) {
            stack.push(char);
        } else if ([')', '}', ']'].includes(char)) {
            if (stack.pop() !== pairs[char]) return false;
        }
    }
    return stack.length === 0;
}