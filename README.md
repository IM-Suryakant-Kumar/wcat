# wcat 📌📌

# About wcat 

* **wcat is nodejs project made to achieve productivity**


* **It is used to display or make a copy content of one or more files in the terminal**

## Commands:

1. wcat filepath => display content of the file in the terminal ✔
2. wcat filepath1 filepath2 filepath3 ... => display content of all files in the terminal (concatenated form) in the given order ✔
3. wcat -s filepath => convert big line breaks into a singular line break ✔
4. wcat -ss filePath => remove extra line breaks and spaces ✔
5. wcat -n filepath => give numbering to all the lines ✔
6. wcat -b filepath => give numbering to non-empty lines .✔
7. wcat filepath > filename2path => put all the content of filename into filename2 by overriding and creates filename2 if it doesn't exist. ✔
8. wcat filename1 >> filename2 into filename2 => append all the content of filename into filename2. ✔
9. wcat -s filename > filename2 => get the file content of filename remove large spaces and save the output in filename2. ✔
10. wcat -ss filename1 > filename2 => get the content of filename1 and remove extra spaces verticallly and horizotally and save the output in filename2
    we can mix and match the options. ✔

## Edge cases:

1- If file entered is not found then it gives file does not exist error. ✔
2- -n and -b are 2 options available together then command should give you an error. ✔


# WANT TO USE

1. Install nodejs in your system
2. clone this project
3. In terminal locate to repo in your local system
4. Use the command `npm link`
- **Now you can use project**
