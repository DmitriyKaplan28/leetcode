/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    const goToSleep = new Promise((resolve) => (setTimeout(() => resolve("asd"), millis)))
    return goToSleep.then((res) => { })
}
