// strings in javascript has some cool utility functions available here

let str='I am computer Science Student, What about you?'
//.indexOf method is case sensitive 
// console.log(str.indexOf('c'));
//write a function to check occurance of a letter eithier in upper case or lower case
function countOccurance(str,letter) {
        let count=0
        let p=str.toLowerCase().indexOf(letter.toLowerCase())
        while (p!=-1) {
            count++
            console.log('found index =>',p);
           p=str.toLowerCase().indexOf(letter.toLowerCase(),p+1)
        }
        return count
}

let test='teestiee'
// console.log('Total Occurance :',countOccurance(test,'e'));


// let works on encoding of strings

//js have a helper method availbe to encode a string  to base 64 string encoded
let encoded=btoa(str)
// console.log('Encoded => ',encoded);

// now if want to decode we also have a helper method
let decoded=atob(encoded)
// console.log('Decoded => ',decoded);



// now take a dive in how bitly like websites short our url

//------------------👉 STRING SHORTENING----------------------

let dict='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('')
function encoder(num) {

    // now dict contains all letters and numbers to make a alpha numeric encoded string shortened
    let base=dict.length
    if (num===0) {
        return dict[0]
    }
    let encoded=''
    // else
    while (num>0) {
        // console.log('current index, ',index);
        encoded += dict[num%base]
        // console.log(encoded);
        // console.log('before divison ',num);
        num=Math.floor(num/base)
        // console.log('after divison ',num);
    }
    // now reverse encoded string
    let reverseStr=''
    for (let i = encoded.length-1; i >=0; i--) {
      reverseStr += encoded.charAt(i)
        
    }
    console.log(encoded);
    return reverseStr
}


function decoder(encodedStr) {
    let base=dict.length
    let decodeNo=0
    for (let i = 0; i < encodedStr.split('').length; i++) {
        
            decodeNo=decodeNo*base+dict.indexOf(encodedStr.charAt(i))
    }
    return decodeNo
}   
console.log(decoder(encoder(421)))