function job(data) {
    return new Promise((resolve, reject) => {
        if (isNaN(data)) {
            reject("error")
        } else {
            data % 2 === 0 ? setTimeout(() => reject("even"), 2000) : setTimeout(() => resolve("odd"), 1000)
        }
    });

}

module.exports = job;