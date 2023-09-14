function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({message: "Data received from API"});
        }, 1000);
    });
}

export default getResponseFromAPI;