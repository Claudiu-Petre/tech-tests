
// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
// Update the current existing inventory item quantities (in arr1). 
// If an item cannot be found, add the new item and quantity into the inventory array. 
// The returned inventory array should be in alphabetical order by item.

function updateInventory(arr1, arr2) {

    // 1. define a global variable for the location of the product
    var index;
    // 2.  built a function:
        // a. to find the index of a specific product
        // b. returns undefined if not found
    const itemIndex = function(name){
        for(let i = 0; i < this.length; i++){
            if(this[i][1] === name){
                return i;
            }
        }
        return undefined;
    };
    // 3. iterate through arr2 to compare it against arr1:
        // a. if not found in arr1 , add it;
    for(let i = 0; i < arr2.length; i++){
        index = itemIndex.call(arr1, arr2[i][1]);
        if(index === undefined){
            arr1.push(arr2[i]);
        }
        // b. if found update its value
        else{
            arr1[index][0] +=arr2[i][0];
        }
   }
    
    // 4. sort arr1 alphabetically
return arr1.sort(function(a, b) {
    if (a[1] > b[1]) {
      return 1;
    }
    if (a[1] < b[1]) {
      return -1;
    }
    return 0;
  });
}
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);