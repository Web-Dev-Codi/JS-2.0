const d = new Date(2022, 7, 10, 19, 0, 0);
const month = d.getMonth();


switch (month) {
    case 1:
        console.log('Its January Bro')
        break;
    case 2:
        console.log('Its February Bro')
        break;
    case 3:
        console.log('Its March Bro')
        break;
    case 4:
        console.log('Its April Bro')
        break;
    case 5:
        console.log('Its May Bro')
        break;
    case 6:
        console.log('Its June Bro')
        break;
    case 7:
        console.log('Its July Bro')
        break;
    case 8:
        console.log('Its August Bro')
        break;
    case 9:
        console.log('Its September Bro')
        break;
    case 10:
        console.log('Its October Bro')
        break;
    case 11:
        console.log('Its November Bro')
        break;
    case 12:
        console.log('Its December Bro')
        break;

    default:
        console.log('You not alive and well')
}

// using switch with ranges with true or false

const hours = d.getHours();

switch (true) {
    case hours < 12:
        console.log('Good Morning My Hommi')
        break;
    case hours < 18:
        console.log('Good Afternoon My Study Monster')
        break;
    default:
        console.log('Good Night Brother')
}