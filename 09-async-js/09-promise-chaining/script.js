const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;

    if (!error) {
      resolve({ name: 'John', age: 30 });
    } else {
      reject('Error: Something went wrong');
    }
  }, 1000);
});

promise
  .then((user) => {
    console.log(user);
    // Since we are returning name we can  us it in the next .then an use as we see fit.
    return user.name;
  })
  // using name we returned
  .then((name) => {
    console.log(name);
    return name.length;
  })
  // we returned name.length and can assign it a variable name then we log to the console
  .then((nameLength) => {
    console.log(nameLength);
  })
  .catch((error) => {
    console.log(error);
    return 123;
  })
  .then((x) => console.log('This .then will run after the catch but not the .then before the catch', x));
