// Find the Symmetric Difference
// The mathematical term symmetric difference (△ or ⊕) of two sets 
// is the set of elements which are in either of the two sets but not in both. 
// For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.
// Symmetric difference is a binary operation, which means it operates on only two elements. 
// So to evaluate an expression involving symmetric differences among three
// elements (A △ B △ C), you must complete one operation at a time. 
// Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.
// Create a function that takes two or more arrays and returns an array of their symmetric difference. 
// The returned array must contain only unique values (no duplicates).

    // sym function takes at least 2 arrays as arguments
function sym(...arrays) {
    
    // 1. arrDiff function returns the symmetric difference of 2 arrays by:
    const arrayDiff = (array1, array2) => {

    // a. Find the items in arr1 that don't exist in arr2
        function filterFunction(array1, array2) {
            return array1.filter(item => array2.indexOf(item) === -1); 
        }
    // b. Run filter on each array against the other and concatenate them
    return filterFunction(array1, array2).concat(filterFunction(array2, array1)); 
};
    // 2. Reduce all arguments to one
    const result = arrays.reduce(arrayDiff, []);

    // 3. Run filter function to get the unique values
    const unique = result.filter((elem, index, arr) => index === arr.indexOf(elem));
    return unique;
}
