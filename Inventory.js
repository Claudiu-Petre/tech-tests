// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
// Update the current existing inventory item quantities (in arr1). 
// If an item cannot be found, add the new item and quantity into the inventory array. 
// The returned inventory array should be in alphabetical order by item.

function updateInventory(arr1, arr2) {

    // compare the arrays
    for(let i = 0; i < arr2.length; i++){
        const found = false;
        for(let j = 0; j < arr1.length; j++){
            if(arr2[i][1] == arr1[j][1]){
                // update arr1 with new values
                arr1[j][0] = arr1[j][0] + arr2[i][0]
                found = true;
            }
        }
        // add new item to arr1 from arr2
        if(!found){
            arr1.push(arr2[i])
        }
    }
    // sort alphabetically
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