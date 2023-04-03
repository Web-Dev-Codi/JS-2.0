
// Passing options object in seconde argument 
            // destucturing title and body of post
function createPost(title, body) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({ // the posted attribiutes we are stingifiying
            // can be just the values we pass since we destuctured, if not we would need key value pairs
            title,
            body
        }), // Headers object
        headers: {  // Content type is content context to be sent and received
            'Content-Type': 'application/json',
            token: 'abc123'
        }
    })
        .then(response => response.json())
        .then((data) => console.log(data)) // The confimation of the post request
}

// Passsed in as object {}
createPost({title: 'Nice job', body: ' This is the post'})