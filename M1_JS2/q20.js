
async function getData() {
    try {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        let data = await response.json();

        console.log("ID:", data.id);
        console.log("Name:", data.name);
        console.log("Email:", data.email);
    } catch (error) {
        console.log("Error fetching data");
    }
}

getData();
