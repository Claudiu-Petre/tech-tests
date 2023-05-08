// 1.  Find the smallest non-negative integer whose individual digits sum to a given integer n, 1, 2.

function smallestNumberWithSum(n){
    // begin with 1
    let num = 1;
    while(true){
        //convert the number to a string and add up its digits to get the sum
        let sum = Array.from(String(num), Number).reduce((a, b) => a + b);
        //if the sum equals to n, return the number
        if(sum === n){
            return num;
        }
        //if not, increment the number by 1 and repeat the process
        num++
    }
}
console.log(smallestNumberWithSum(10)); // result 19

