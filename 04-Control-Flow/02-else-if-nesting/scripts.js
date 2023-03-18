const d = new Date(10, 21, 2022, 6, 0, 0);
const hours = d.getHours();


if (hours < 12) {
    console.log('Good Morning');
} else if (hours <= 18) {
    console.log('Good Afternoon');
} else {
    console.log('Good Evening');
};

// Nested If Statement

if (hours < 12) {
    console.log('Good Morning');
    if (hours === 6) {
        console.log('Wake the hell up');
    }
} else if (hours < 18) {
    console.log('Good Afternoon');
} else {
    console.log('Good Evening');
    if (hours >= 20) {
        console.log('Sleepy Sleep');
    }
};

// Multipule condition in a statement

if (hours >= 7 && hours < 17) {
    console.log('Have fun working that 9 to 5 MFer')
} else if (hours > 17 && hours < 22) {
    console.log('Time to Study')
} else if (hours > 22) {
    console.log('Bed Time, Get rest for the next day Hommi')
}

// Using || AKA or in else if

if (hours === 6 || hours === 20) {
    console.log('Brush Them Teeth Broski');
}