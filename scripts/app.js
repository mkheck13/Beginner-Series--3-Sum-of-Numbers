// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it.
//  If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.




// we will use if statements to handle the differnt outcomes we may have
// one to handle the a and b being the same
// one to handle if a is greater then b
// and one to handle if b is greater then a
function getSum(a, b){
    if(a == b){
        return a;
    }else if (a > b){
        return a + getSum(a-1,b)
    }else{
        return a + getSum(a+1,b)
    }
}