
function delay() {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
}

async function completeTask() {
    await delay();
    console.log("Task Completed");
}

completeTask();
