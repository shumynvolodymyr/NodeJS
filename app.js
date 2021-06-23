// Посортувати юзерів по папках.
//     У вас є дві папки. 1800 та 2000. В кожній з цих папок є файлики аля Karina.txt в якому міститься {"gender": "female"}
// Oleg.txt в якому міститься {"gender": "male"}
// 1) Студентів з 1800 перевести в групу на 2000. І навпаки
// 2) Перемістити всіх дівчат в папку girls а хлопців в папаку boys.
//
// * вам потрбіно перемісти всі файлики з вкладених папок в іншу папку. Зробити всі файли на одному рівні вкладеності.
// (Більше інформації в записі лекції)

const fs = require('fs');
const path = require('path');

console.log("Going to create directory /dir/1800");
fs.mkdir(path.join(__dirname, 'dir', '1800'), {recursive: true}, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log("Directory created successfully!");
});

console.log("Going to create directory /dir/2000");
fs.mkdir(path.join(__dirname, 'dir', '2000'), {recursive: true}, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log("Directory created successfully!");
});

const filePathKarina = path.join(__dirname, 'dir', '1800', 'Karina.txt');
const filePathOleg = path.join(__dirname, 'dir', '2000', 'Oleg.txt');

console.log("Going to create file /dir/1800/Karina.txt");

function createKarina() {
    fs.writeFile(filePathKarina, '{"gender": "female"}', (err) => {
        if (err) {
            console.log(err);
        }
        console.log("File Karina.txt created successfully!");
    });
}

setTimeout(createKarina, 50);

function createOleg() {
    console.log("Going to create file /dir/2000/Oleg.txt");
    fs.writeFile(filePathOleg, '{"gender": "male"}', (err) => {
        if (err) {
            console.log(err);
        }
        console.log("File Oleg.txt created successfully!");
    });
}

setTimeout(createOleg, 50);

///////////////////////////////////// 1) Студентів з 1800 перевести в групу на 2000. І навпаки///////////////////////////

// const dir1800 = path.join(__dirname, 'dir', '1800');
// const dir2000 = path.join(__dirname, 'dir', '2000');

// function transfer(oldGroup, newGroup) {
//     fs.readdir(oldGroup, (err, files) => {
//         if (err) {
//             console.log(err);
//             return
//         }
//         files.forEach(file => {
//             fs.rename(path.join(oldGroup, file), path.join(newGroup, file), err => {
//                 if (err) {
//                     console.log(err);
//                 }
//                 fs.rmdir(oldGroup, {recursive: true}, (err) => {
//                     if (err) {
//                         console.log(err);
//                     }
//                 });
//             });
//         });
//     });
// }
// setTimeout(transfer,75);
// transfer(dir1800, dir2000);

///////////////////////////// 2) Перемістити всіх дівчат в папку girls а хлопців в папаку boys.//////////////////////////

// const dir1800 = path.join(__dirname, 'dir', '1800');
// const dir2000 = path.join(__dirname, 'dir', '2000');

// function sort(directory) {
//     fs.readdir(directory, (err,files) => {
//         if (err) {
//             console.log(err);
//             return
//         }
//         files.forEach(file=>{
//             fs.readFile(path.join(directory, file),(err, data)=>{
//                 if (err) {
//                     console.log(err);
//                     return
//                 }
//
//                 const value = JSON.parse(data.toString());
//
//                 if (value.gender === "female") {
//                     fs.mkdir(path.join(__dirname, 'girls'), {recursive: true}, (err) => {
//                         if (err) {
//                             return console.log(err);
//                         }
//                         fs.rename(path.join(directory, file),path.join(__dirname, "girls", file), err1 => {
//                             if (err1) {
//                                 console.log(err1);
//                             }
//                             fs.rmdir(directory,{recursive: true}, (err)=>{
//                                 if (err) {
//                                     console.log(err);
//                                 }
//                             });
//                         });
//                     });
//                 }
//                 if (value.gender === "male") {
//                     fs.mkdir(path.join(__dirname, 'boys'), {recursive: true}, (err) => {
//                         if (err) {
//                             return console.log(err);
//                         }
//                         fs.rename(path.join(directory, file),path.join(__dirname, "boys", file), err1 => {
//                             if (err1) {
//                                 console.log(err1);
//                             }
//                             fs.rmdir(directory,{recursive: true}, (err)=>{
//                                 if (err) {
//                                     console.log(err);
//                                 }
//                             });
//                         });
//                     });
//                 }
//             });
//         });
//     });
// }
// setTimeout(sort,100);
// sort(dir2000);