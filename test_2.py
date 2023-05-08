#  2. Widest path without trees
#  There are N trees (numbered from 0 to N-1) in a forest. 
#  The K-th tree is located at coordinates (X[K], Y[K]). 
#  We want to build the widest possible vertical path, such that there is no tree on it. 
#  The path must be built somewhere between a leftmost and a rightmost tree, which means that the width of the path cannot be infinite.
#  What is the width of the widest possible path that can be built?
#  Write a function: def solution(X, Y)that, given two arrays X and Y consisting of N integers each, denoting the positions of trees, returns the widest possible path that can be built.

#  the solution is in Python

def solution(X, Y):
    
    difference = 0
    sortedX = sorted(X)
    for i in range(0, len(sortedX) - 1):
        diff = sortedX[i + 1] - sortedX[i]
        if diff > difference:
            difference = diff
    return difference

if __name__ == '__main__':
    X = [int(X) for X in input().split()]
    Y = [int(X) for X in input().split()]
    res = solution(X, Y)
    print(res)