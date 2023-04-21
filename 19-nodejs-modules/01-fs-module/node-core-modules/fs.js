// Import fs and require it
const fs = require('fs/promises');


// Write to a file


// // callback version
// fs.writeFile('file1.txt', 'Hello World!', (err) => {
//     if (err) throw err;
//     console.log('File created')
// });

// // Promise version
// fs.writeFile('file2.txt', 'Promise version')
//     .then(() => console.log('File with promise complete'))
//     .catch((err) => console.log(err));

// // Sync version
// fs.writeFileSync('File3.txt', 'Sync Version');
// console.log('Sync Version Complete');

// // Async Await version
// async function createFile(filename, content) {
//     try {
//         await fs.writeFile(filename, content)
//         console.log('File Created')
//     } catch (error) {
//         console.log(error)

//     }
// }

// // Must call the function to run it
// createFile('File4.txt', 'Async Version');

// // Read from a file
// async function readFile(filename) {
//     try {
//         const data = await fs.readFile(filename, 'utf8')
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// // call the function
// readFile('file4.txt');

// delete File
// async function deleteItem(filename) {
//     try {
//         await fs.unlink(filename)
//         console.log('Deleted File')
//     } catch (error) {
//         console.log(error)
//     }
// }

// deleteItem('file3.txt')

// File rename
// async function renameFile(oldname, newName) {
//     try {
//         await fs.rename(oldname, newName);
//         console.log(`File ${oldname} renamed to ${newName}`)

//     } catch (error) {
//         console.log(error);
//     }

// }

// renameFile('RenamedFile', 'RenamedFilev2.txt');


// Make a folder
async function createFolder(folderName) {
    try {
        fs.mkdir(folderName);
        console.log(`${folderName} was created Bro`);
    } catch (error) {
        console.log(error);
    }
}

createFolder('Folder-Created');

