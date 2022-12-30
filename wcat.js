#!/usr/bin/env node
let fs = require("fs");
let inputArr = process.argv.slice(2);
// console.log(inputArr);
let optionArr = [];
let fileArr = [];
for (let i = 0; i < inputArr.length; i++) {
    let firstChar = inputArr[i].charAt(0);
    if (firstChar == "-") {
        optionArr.push(inputArr[i]);
    } else {
        fileArr.push(inputArr[i]);
    }
}
// options check
let isBothPresent = optionArr.includes("-b") && optionArr.includes("-n");
if (isBothPresent) {
    console.log("Either enter -n or -b option");
    return;
}
// existence
for (let i = 0; i < fileArr.length; i++) {
    let isPresent = fs.existsSync(fileArr[i]);
    if (!isPresent) {
        console.log(`file ${fileArr[i]} is not present`);
        return;
    }
}

// read 
let content = "";
for (let i = 0; i < fileArr.length; i++) {
    // buffer
    let bufferContent = fs.readFileSync(fileArr[i]);
    content += bufferContent + "\r\n";
}
// console.log(content);
let contentArr = content.split("\r\n");
// console.log(contentArr);
// -s
let isSPresent = optionArr.includes("-s");
if (isSPresent) {
    for (let i = 1; i < contentArr.length; i++) {
        if (contentArr[i] == "" && contentArr[i - 1] == "") {
            contentArr[i] = null;
        } else if (contentArr[i] == "" && contentArr[i - 1] == null) {
            contentArr[i] = null;
        }
    }
    let tempArr = [];
    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] != null) {
            tempArr.push(contentArr[i]);
        }
    }
    contentArr = tempArr;
}
// console.log("-----------------------------");
// console.log(contentArr.join("\n"));
// -ss
let isSSPresent = optionArr.includes("-ss");
if(isSSPresent){
    let tempArr = [];
    for (let i = 0; i < contentArr.length; i++) {
        tempArr.push(removeEachContentSpaces(contentArr[i]));
    }
    contentArr = tempArr;
}
// -n
let isNPresent = optionArr.includes("-n");
if (isNPresent) {
    for (let i = 0; i < contentArr.length; i++) {
        contentArr[i] = i + 1 + " " + contentArr[i];
    }
}
// console.log(contentArr.join("\n"));
// -b
let isBPresent = optionArr.includes("-b");
if (isBPresent) {
    let counter = 1;
    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] != "") {
            contentArr[i] = counter + " " + contentArr[i];
            counter++;
        }
    }
}
function removeEachContentSpaces(content){
    let splitContent = content.split(` `);
    for (let i = 0; i < splitContent.length; i++) {
        if(splitContent[i] == ``){
            splitContent.splice(i, 1);
            i--;
        } 
    }
    return splitContent.join(` `);
}
console.log(contentArr.join("\n"));