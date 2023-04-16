const axios = require('axios')


async function getPost() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    // response object is 1 promise and is the DATA object
    console.log(response.data)
}


getPost();




