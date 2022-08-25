/* HASHTABLES🎰📑🔍 is a very beautiful data structure of fixed size!
benefits:=>
although these are implemented with some extra space
but these make the lookup 🔍 of item in O(1) time
and unlike array where insertion can results in 🕒O(n) b/c we have to  shift whole array
here insertion -- PUT() AND GET() => lookup results in O(1) time complexity
// SO WE HAVE KEY VALUE PAIRS 
hashtable has main thing 👉"HASH FUNCTION" which results us an hashed key
to avoid colision we can user 
1-- LINEAR PROBING --> hash(x)=> x % size bad(cause clustering of atoms)
2-- QUADRATICE PROBING  hash(x)=>  (x + i^2) % size
3-- DOUBLE HASHING  hash2(x)=>  R-(x%R) where x is the result of first hash and R is 2 less than the size of hashtable
*/

function HashTable(size) {
    let keys = Symbol.for('keys')
    let values = Symbol.for('values')
    this.size = size
    this.limit = 0
    this[keys] = this.initArray(size)
    this[values] = this.initArray(size)
}
HashTable.prototype.initArray = function (size) {
    return new Array(size).fill(null)
}


//1️⃣------------ LINEAR PROBING-----------------
HashTable.prototype.hash = function (key) {
    return key % this.size
}

HashTable.prototype.put = function (key, value) {
    if (this.limit > this.size) throw "Table is Full!"
    // generate hash key
    let hashedIndex = this.hash(key)
    // lookfor if there is already an value in that specific key
    while (this[Symbol.for('keys')][hashedIndex] != null) {
        hashedIndex++
        hashedIndex = this.hash(hashedIndex)
    }
    this[Symbol.for('keys')][hashedIndex] = key
    this[Symbol.for('values')][hashedIndex] = value
    this.limit++;
}
HashTable.prototype.get = function (key) {
    let hashedIndex = this.hash(key)

    while (this[Symbol.for('keys')][hashedIndex] !== key) {
        hashedIndex++;
        hashedIndex = this.hash(hashedIndex)
    }
    return this[Symbol.for('values')][hashedIndex]
}

// so let's test this
let table1 = new HashTable(11)
// try size with prime numbers this will avoid collision far
// console.log(Object.getOwnPropertySymbols(table1));


//2️⃣--- QUARRATIC PROBIING
HashTable.prototype.put = function (key, value) {
    if (this.limit > this.size) throw "Table is Full!"
    // generate hash key
    let hashedIndex = this.hash(key)
    // lookfor if there is already an value in that specific key
    let squareIndex = 1
    while (this[Symbol.for('keys')][hashedIndex] != null) {
        hashedIndex += Math.pow(squareIndex, 2)
        hashedIndex = this.hash(hashedIndex)
        this.squareIndex++
    }
    this[Symbol.for('keys')][hashedIndex] = key
    this[Symbol.for('values')][hashedIndex] = value
    this.limit++;
}
HashTable.prototype.get = function (key) {
    let hashedIndex = this.hash(key)
    let squareIndex = 1
    while (this[Symbol.for('keys')][hashedIndex] !== key) {
        hashedIndex += Math.pow(squareIndex, 2)
        hashedIndex = this.hash(hashedIndex)
        squareIndex++
    }
    return this[Symbol.for('values')][hashedIndex]
}
/*
table1.put(10,"corel draw")
table1.put(23,"photoshop")
console.log(table1.get(10))
console.log(table1.get(23))
console.log(table1)
*/

// 3️⃣ DOUBLE HASHING FUNCTION with linear approach
HashTable.prototype.hash = function (key) {
    return this.doubleHash(key % this.size)
}
HashTable.prototype.doubleHash = function (X) {
    // R-(X % R)
    let R = this.size - 2
    return R - (X % R);
}
HashTable.prototype.put = function (key, value) {
    if (this.limit > this.size) throw "Table is Full!"
    // generate hash key
    let hashedIndex = this.hash(key)
    // lookfor if there is already an value in that specific key
    while (this[Symbol.for('keys')][hashedIndex] != null) {
        hashedIndex++
        hashedIndex = hashedIndex % this.size
    }
    this[Symbol.for('keys')][hashedIndex] = key
    this[Symbol.for('values')][hashedIndex] = value
    this.limit++;
}
HashTable.prototype.get = function (key) {
    let hashedIndex = this.hash(key)

    while (this[Symbol.for('keys')][hashedIndex] !== key) {
        hashedIndex++;
        hashedIndex = hashedIndex % this.size
    }
    return this[Symbol.for('values')][hashedIndex]
}

// table1.put(10,"corel draw")
// table1.put(23,"photoshop")
// table1.put(91,"adobe illustrator")
// table1.put(44,"adobe xd")
// table1.put(17,"filmora wonderX")
// table1.put(200,"dream software")
// console.log(table1.get(200));
// console.log(table1.get(91));
// console.log(table1.get(23));
// console.log(table1);
/**
 * HashTable {
  size: 11,
  limit: 6,
  [Symbol(keys)]: [
    null, null, null, 17,
    null, null, 91,   200,
    10,   23,   44
  ],
  [Symbol(values)]: 
   [ null, null, null, 'filmora wonderX', null, null, 'adobe illustrator', 'dream software', 'corel draw', 'photoshop', 'adobe xd']
}
 */
