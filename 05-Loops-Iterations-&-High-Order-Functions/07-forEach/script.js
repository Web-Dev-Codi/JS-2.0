
// forEach method
// functions argument can be called what you like. be descriptive
// older way               argument
// socials.forEach(function (item) {
//     // logging the items argument to the coinsole.
//     console.log(item)
// });



// Using array
// socials.forEach((item, index, array) => console.log(`${index} - ${item}`, array));


// passing in a named function
const socials = ['Twitter', 'LinkedIn', 'Youtube', 'Twitch'];

function logSocials(social) {
    console.log(social);
}

socials.forEach(logSocials);

// Objects
const socialObj = [
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Twitch', url: 'https://twitch.com' },
    { name: 'Youtube', url: 'https://youtube.com' },
    { name: 'LinkedIn', url: 'https://linkedIn.com' }
];


socialObj.forEach((item, index) => console.log(item,index))