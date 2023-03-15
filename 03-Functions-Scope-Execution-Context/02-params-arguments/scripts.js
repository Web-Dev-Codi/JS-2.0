// Using Default params 

function registerUser(user = 'Bot') {
    return user + ' is registered';
}

console.log(registerUser());

// Rest parameters

function sum(...numbers) {
    let total = 0;

    for (const num of numbers) {
        total += num;
    }

    return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 100, 1324323523, 6743, 55, 6, 88));


// Object as params

function loginUser(user) {
    return `The user ${user.name} with and id of ${user.id} is logged in`
}

const user = {
    id: 1,
    name: 'Brian Cordisco'
};

console.log(loginUser(user));


console.log(loginUser({
    id: 2,
    name:'Gülden'
}))


// Arrays as params

function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length)

    const item = arr[randomIndex];

    console.log(item)
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9]);