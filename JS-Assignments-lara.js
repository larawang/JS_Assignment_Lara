"use strict";

/**
 * flatten array using Depth-first search / Breadth-first search
 * assuming elements in array are numbers and arrays only
 * the order of output array doesn't matter
 */
function dfsFlatten(item, res) {
    if (typeof item==="number"){
    res.push(item);
    return;
    }

for (let i=0;i<item.length;++i){
    dfs(item[i],res);
    } 
}


function bfsFlatten(arr) {
// Implement here
const res=[];
const queue=arr;
let item;
while (queue.length){
    item=queue.shift()
    if(typeof item==="number"){
        res.push(item);}
    else{queue.push(...item);}
    }
    return res;
}



const rawArr = [1, 2, [3, 4, [5, 6], 7], 8, [9, 0]];
console.log("DFS:", dfsFlatten(rawArr));
console.log("BFS:", bfsFlatten(rawArr));


// Leetcode Problem Solving
/**
 * Leetcode #1
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const len=nums.length
  for (let i=0; i<len; i++){
    for(let j=i+1; j<len; j++){
        if(nums[i]+nums[j]===target){
            return [i,j];
        }
    }
  }
}


/**
 * Leetcode #9
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    if (x < 0) return false

    let reversed = 0, y = x

    while (y > 0) {
        const lastDigit = y % 10
        reversed = (reversed * 10) + lastDigit
        y = (y / 10) | 0
    }
    return x === reversed
}


/**
 * Leetcode #15
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums, target) {
    const ans=[];
    if (nums.length<3)return ans;
    nums.sort((a,b)=>a-b);
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0)break;
        if(i>0&&nums[i]===nums[i-1])continue;

        let start = i+1,end = nums.length -1;
        while(start < end){
            const sum = nums[i]+nums[start]+nums[end];
        if(sum === 0){
         ans.push([nums[i],nums[start],nums[end]]);
         start++;
         end--;
         while(start<end && nums[start]===nums[start-1]) start++;
         while(start<end && nums[end]=== nums[end+1])end-=1;
     }
     else if(sum < 0) start++;
     else if(sum>0) end--;
     }
}
return ans;
};





// Array Prototype Methods Implementations
// pass given test cases (no need for perfect implementation involving specific thisArg)
// Example:
Array.prototype.forEach = function(fn) {
  typeof fn === "function" && fn.apply(null, this);
};
console.log("forEach: ", [1,2,3].forEach(console.log));



// ==== Native Filter ====
Array.prototype.filter = function(arr,callback){
  // Implement here
  if(!Array.isArray(arr) || !arr.length || typeof callback !== 'function'){
       return [];
    }else{

  let res=[]
  for (let i=0; len=arr.length; i<len; i++){
    if (callback(arr[i], i, arr))
        res.push(callback(arr[i],i,arr);
  }
  return res;
}

const filter_words = ['a', 'ab', 'bcd', 'asdf', 'asdfre', 'qwerre'];
console.log('filter: ', filter_words.filter(word => word.length > 3));

// ==== Native Map ====
Array.prototype.map = function(arr,callback) {
  // Implement here
  if (!Array.isArray(arr) || !arr.length || typeof callback !== 'function'){
    return[];
  } else {
    let res = [];
    for (let i = 0; len=arr.length; i<len; i++)
        res.push(callback(arr[i], i, arr));
}
  return res;
}


const map_array = [1, 4, 9, 16];
console.log("map:", map_array.map(x => x * 2));

// ==== Native Reduce ====
Array.prototype.reduce = function(arr, callback, initialValue){
     if(!Array.isArray(arr) || !arr.length || typeof callback !== 'function'){
        return [];
      }else{
     let (hasinitialValue = initialValue!== undefined;
     let value = hasinitialValue?0:1, len=arr.length; i<len, i++){
        value=callback(value, arr[i], i, arr);
     }
return value;
}
}

const reducer = (accumulator, item) => {
  return accumulator + item;
};
const total = numbers.reduce(reducer, initialValue)



const reduce_array = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log("reduce:", reduce_array.reduce(reducer));

// ==== Native Bind ====
Function.prototype.bind = function(context) {
 // Implement here
const thisFunc = this;

const returnFunc = function(){
    thisFunc.apply(context,[]);

}
return returnFunc;
}

// test case 1
const test = {
  name: "Jesse",
  func: function() {
    console.log(this.name);
  }
};

test.func(); // Jesse
const newf = test.func.bind({name: "Abby"});
newf(); // Abby

// test case 2
const func = (a, b) => a+b;
const boundFunc = func.bind(null, 'foo');
console.log(boundFunc('bb', 'cc')); // foobb
