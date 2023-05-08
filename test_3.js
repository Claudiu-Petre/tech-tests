// 3. ...
function solution(S){
    let result = []
    let isFound = false;

    for(let i = 0; i < S.length; i++){
        let currentString = S[i];

        for(let j = i + 1; j < S.length; j++){
            let checkString = S[j];

            for(let p = 0; p < currentString.length; p++){
                if(currentString.charAt(p) === checkString.charAt(p)){
                    result[0] = i;
                    result[1] = j;
                    result[2] = p;
                    isFound = true;
                    break
                }
            }
            if(isFound) break;
        }
        if(isFound) break;
    }
    return result
}