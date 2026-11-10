function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("Data received successfully");
            } else {
                reject("Error found");
            }
        }, 3000);
    });
}


// let data = fetchData();

fetchData()
    .then((data) => {
        // console.log(data);
        return data.toUpperCase();
        
        // console.log("Working properly");
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Done!")
    });

// console.log(data);