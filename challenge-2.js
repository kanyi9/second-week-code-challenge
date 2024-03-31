function generateNumbers(num1, num2){//i have created a function that accepts two numbers,num1 and num2,
    let numbers=[]
    if(num1 <=num2){
        for(let i=num1; i <=num2; i++){//the condition for the function ,assigning i to num1 and i should increase by 1
         numbers.push(i)
        }
    
         }
         return numbers
}console.log(generateNumbers(6,100))//this is the output