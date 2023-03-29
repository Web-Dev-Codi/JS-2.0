// // Takes in an event. Changes the button to red once clicked
// function toggle(e) {

//   console.log('callback ran');
//   // Changes button color to red
//   e.target.classList.toggle('danger');
// }

// document.querySelector('button').addEventListener('click', toggle);



//  Demo of why a callback is useful in async programming
const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

// Function to create a new post
                          // cb is for callaback
function createNewPost(post, cb) {
  setTimeout(() => {
    // Pushing new post 
    posts.push(post);
    // executes once the post is created
    cb();
  }, 2000);
}

function getPost() {
  // Takes in a function and second argument is the time to wait.
  setTimeout(() => {
    posts.forEach((post) => {
      // creating a div to store the posts 
      const div = document.createElement('div');
      // Constructing the content for the created element
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      // Adding element to the DOM
      document.querySelector('#posts').appendChild(div);
    });
  }, 1000);
}

createNewPost({ title: 'Post Three', body: 'This is post three' }, getPost);


