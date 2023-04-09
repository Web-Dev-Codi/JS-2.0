// fetch('http://httpstat.us/200')
//     .then((response) => {
//         return response;
//     })
//     .then(() => {
//         console.log('Success');
//     });




// Test with response ok
// fetch('http://httpstat.us/404')
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error('Request Failed')
//         }
//         return response;
//     })
//     .then(() => {
//         console.log('Success');
//     });







// With 401
fetch('http://httpstat.us/401')
    .then((response) => {
        if (response.status === 404) {
            throw new Error('Not Found');
        } else if (response.status === 500){
            throw new Error('Server Error Bro')
        } else if (response.status !== 200){
            throw new Error('Request Failed Broski')
        } 
        return response;
    })
    .then(() => {
        console.log('Success');
    });