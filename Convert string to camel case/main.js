/*
DESCRIPTION:
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/

// solution
function toCamelCase(str) {

    let arr = []
    if (str.includes("_")) {
        let strToArr = str.split("_")
        arr.push(strToArr[0])
        for (let i = 1; i < strToArr.length; i++) {
            arr.push(strToArr[i][0].toUpperCase() + strToArr[i].substring(1, strToArr[i].length))
        }
    } else if (str.includes("-")) {
        let strToArr = str.split("-")
        arr.push(strToArr[0])
        for (let i = 1; i < strToArr.length; i++) {
            arr.push(strToArr[i][0].toUpperCase() + strToArr[i].substring(1, strToArr[i].length))
        }
    }
    return arr.join("")
}
console.log(toCamelCase("The-Stealth-Warrior"))