

let task = new Promise((resolve, reject) => {
    resolve("Task Completed");
});

task.then((message) => {
    console.log(message);
});
