1. It will print because i is visible after the loop since it is a global variable. 
2. Discounted price is out of scope because discounted price is declared inside the brackets for the foor loop.  
3. FinalPrice will print normally because the variable is initially declared outside of the for loop and is function scoped.
4. It will print 
``` 
    3
    150
    150
```
because i stops when i is greater than or equal to the length of the prices array, so it stops at 3. DiscountedPrice will print 150 because half of the last element of prices which is 300*.5 = 150. It will only be the value of the last element because it is getting updated every iteration. This is the same for final price. FinalPrice is just the rounded portion of the last so it is the same output. 

5. Throws error because i is not defined since let variables only are available inside their brackets. 
6. DiscountedPrice is only declared inside the for loop brackets. It is out of scope in line 12.
7. finalPrice is in scope because it was declared in the function and console.log is called within the function.
8. It will return an error because i is not defined because it is called out of scope. 
9.  In general, the function will throw an error beforehand because finalPrice is a constant and shoulnd't be changed. Specifically, i will be out of scope because it is declared with a let and can only be used inside the for loop.
10. Discounted price is a constant and cannot be changed. Also, the constant can only be used inside the for loop where it is declared. It would be undefined in this line
11. FinalPrice shouldn't be changed because it is a constant. However, this is an in scope call.
12. as the code currently is, we would have to ignore compile errors since both i is out of scope and discountedPrice is altering a constant and finalPrice is altering a constant. 
13. Objects
    1.  student.name
    2.  student['Grad Year']
    3.  student.greeting()
    4.  student['Favorite Teacher'].name
    5.  student.courseLoad[1]

14. Arithmetic
    1.  32
    2.  1
    3.  3
    4.  3null
    5.  4
    6.  0
    7.  3undefined
    8.  NaN
15. Comparison
    1.  true
    2.  false
    3.  true
    4.  false
    5.  false
    6.  true
16. The == compares two values but doesn't take into account data type, which is why 2 == '2' returns true but 2 === '2' does not. The === operator takes into account datatypes when comparing.
17. 2 is not equal to True because 1 is the value that is equal to True. Therefore it then checks the else if condition. The else if condition is true so it prints "How are you?"
18. 
``` 
for (const [key, value] of   Object.entries(statistics)) {
    if(key[0] == 'r' || value%2 != 0){
        console.log(value);
    }
}
```
19.  New array would be [6,8,10]. In line 4, you are inputting the current value of the array. The first value you input is 1. It goes into doSomething and adds 2 to 1 and then goes into the function is specified as the callback so it multiplies by 2 so that would be 3*2 = 6 for the first val in new array.It then appends that value of 6 to the array. It does the same for 2 so it becomes 4 in do something then gets multiplied by 2 = 8. Then finally we have 3+2=5 and then 5mult2 = 10.
20. code in file
21. The output is `1 4 3 2` because there is a delay for 3 and 2.

