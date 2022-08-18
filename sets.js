/*  sets are very important in any programming language
basically sets are the collections of distinct elemnts here the distinct meas that  "Each element of set should be unique there will be no duplicate elements"
// bydefault Js supports sets and provides adding duplicate elements
*/


// basic overview
// insertion
// let s1=new Set()
// s1.add(23)
// s1.add(12)
// s1.add(12)
// avoid being added

// deletion
// s1.delete(12)
// console.log(s1);
// size
// console.log(s1.size);//1
// contains
// console.log(s1.has(12));
// console.log(s1.has(23));

// for clearing all set
// console.log(s1.clear());
// console.log(s1.entries());


// lets perform some basic  opertions with sets
function intersection(set1,set2) {
        const interSet=new Set()
        // we have to add both set common elements
        for (const elm of set1) {
            if (set2.has(elm)) {
                interSet.add(elm)
            }
        }
        return interSet
        // time complexity is O(n)
}

function union(set1,set2) {
    const uSet=new Set(set1)
    // now uSet have all element of one set simply add others
    for (const iterator of set2) {
        uSet.add(iterator)
    }
    return uSet
    
}



// fucntion check if array contains any duplicate elements
function checkDuplication(array) {
    let set=new Set([...array])
    if (set.size<array.length) return true
    else return false
}


function differceOfSets(set1,set2) {
    // so idea is that set1 - set 2 ==> set1 only contains those elemnts  who will be not in s2
    let diffSet=new Set(set1)
    for (const elm of set2) {
        if (diffSet.has(elm)) {
            diffSet.delete(elm)
        }
    }
    return diffSet

}


function isSuperSet(set,subset) {
    //if all elements of subset are present in set then it is a superset
    for (const elm of subset) {
        if (!set.has(elm)) {
            return false
        }
    }

    // for worst case it's time complexity is O(n)
    return true
}

let a=new Set([1,2,3,5])
let b=new Set([2,4,5])

let mainSet=new Set([1,2,3,4,5])
let subSet=new Set([2,3,9])

console.log(isSuperSet(mainSet,subSet));

/*
console.log(intersection(a,b)) // [2,5]
console.log(union(a,b)) // [1,2,3,4,5]
console.log(differceOfSets(a,b)) // [1,3]
console.log(checkDuplication([1,2,2]));//true
console.log(checkDuplication([1,2,3]));//false

*/