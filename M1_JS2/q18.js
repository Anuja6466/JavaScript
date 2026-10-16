
let task = new Promise((resolve, reject) => {
    reject("Task Failed");
});

task.catch((message) => {
    console.log(message);
});
