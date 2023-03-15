const post = {
    id: 1,
    title: 'Post One',
    body: 'This is the body'
};


// Convert to JSON string using JSON Object

const str = JSON.stringify(post)


// parsing JSON

const obj = JSON.parse(str)

// Parsing Objects

const posts = [
    {
        id: 1,
        title: 'Post One',
        body: 'This is the body'
    },
    {
        id: 2,
        title: 'Post two',
        body: 'This is the body of post two'
    }
]

const str2 = JSON.stringify(posts)

console.log(str2)