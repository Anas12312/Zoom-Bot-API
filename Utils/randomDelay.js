async function randomDelay() {
    const delay = getRandomInt(1000, 5000); // 1 to 5 seconds delay
    return new Promise(resolve => setTimeout(resolve, delay));
}