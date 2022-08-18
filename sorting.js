/* sorting is a funndamental and crucial step to learn any data structures b/c here you actuall struturre your data with different alogirthims and techniques

  there are numerous ways of sorting even one alogorithim has several ways of implementing it so let's start
1 👉------------- BUBBLE SORT ALOG -----👈
 bubble sort is  a very basic and  non optimized way here time complexit is O(n^2) becasue the idea is that
 you pick one element and compare it with the current iteration length of array and swap it every other element
 in javacript array are mutable so if you call swapper it will actually swap at runitime mutating actual array
*/


function bubbleSortv1(arr) {

    for (let i = 0,len=arr.length; i < len; i++) {
        
        // no take curret element and compare it with current iteration length of array and swap it
        for (let j = 0; j < i; j++) {
            if (arr[i]<arr[j]) {
                swapHelper(arr,i,j)
            }
        }
    }
    return arr
    
}


// another way of implementing sorting is the bubble  the largest element of array and sort the array for  "i" iteration to "n-i" iteration
function bubbleSortv2(arr) {
    for (let i = 0,len=arr.length; i < len; i++) {
        for (let j = 0; j < arr.length-i; j++) {
            //if l>r then swap it
            if (arr[j]>arr[j+1]) {
                swapHelper(arr,j,j+1)
            }
        }
    }
    return arr
}




/* 2nd method of sorting is the  👉 SELECTION SORT 👈✅
SELECTION SORT IS a little bit much faster or optimized but in worst case scenerio it's time complexity is also O(n^2)
IDEA --> 
 here we scan in every iteration the smallest element of remaing array  for "i" iteration of array "i-1"
 so after each iteration i length of array is sorted and we continue to the end of array
*/

function selectionSort(arr) { // O(n^2)
    let min,len=arr.length;
    for (let i = 0; i < len; i++) {
        min=i
        // here scan the smallest element of array
        for (let j = i+1; j < len; j++) {
            if (arr[min]>arr[j]) {
                min=j
            }
        }
        if (i!=min) {
            swapHelper(arr,min,i)
        }
    }
    return arr
}


function swapHelper(arr,index1,index2) {
    let temp=arr[index1]
    arr[index1]=arr[index2]
    arr[index2]=temp
}


let numsArr=[190,56,92,23,200,192]
let names=['Kaleem','Iqra','Adnan','Zohaib','Saleem','Farhan','Tehlil','qandeel']
// console.log(bubbleSortv1(names));
// console.log(bubbleSortv2(numsArr));
// console.log(selectionSort(numsArr));
// console.log(selectionSort(names.join(' ').toLowerCase().split(' ')));