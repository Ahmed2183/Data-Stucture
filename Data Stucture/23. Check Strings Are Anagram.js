/* Check Strings are Anagram */
// Anagram means two strings jinkay characters same hai but orders/arrangment different hai
function checkAnagram(str1, str2) {
    let ObjStr = {};

    if (str1.length !== str2.length) {
        return false;
    }

    for (ch of str1) {  // --> For-of loop
        //  console.log(ch);
        ObjStr[ch] = (ObjStr[ch] || 0) + 1;  /* -->Counting of duplicte characters, If (ObjStr[ch] || 0) means ObjStr[ch] undefined ha tu zero hojai or zero ha tu tu plus 1 krday */
    }
    // console.log(ObjStr);


    for (ch of str2) {
        //  console.log(ch);
        // console.log(ObjStr[ch]);
        if (!ObjStr[ch]) {  /* --> If any cahracter not in Object */
            return false;
        }
        ObjStr[ch]--;
    }
    return true;
}

const check = checkAnagram("hello", "ehllo");
console.log(check);
// console.log(checkAnagram("hello", "ehllooo"));
// console.log(checkAnagram("cat", "act"));
// console.log(checkAnagram("cat", "tacc"));
