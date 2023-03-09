//  Node.js Training session-2 hometask.
// Problem statement.
// 1. Create a node.js command line program which reads operation(add, subtract, multiply, division) and values as arguments and returns the appropriate output onto console as in below criteria
// a. node app.js --operation addition 1 2 3 4 => 1+2+3+4 = 10
// b. node app.js --operation multiply 1 2 3 4 => 1*2*3*4 = 24
// c. node app.js --operation subtraction 2 1 => 2 - 1 = 1
//d. node app.js --operation division 4 2 => 4/2 = 2
// 2. All the invalid cases need to be handled for all the operations
// 3. Include validations for unsupported operations, number of inputs etc.
// Note: Please note that addition and multiplication takes "n” values for inputs. Subtraction and division takes 2 values for input.
const generateResult=(result,operation,values)=>{
    console.log(`The result of ${operation} on the values ${values} is ${result}`);
};
const clArguments=process.argv.slice(2);
const operation=clArguments[1];
const values=clArguments.slice(2);
//console.log(clArguments,operation,values)
let result;
if(clArguments[0]==='--operation' && values.length>=2){
    switch(operation){
        case 'addition':
            result=values.reduce((a,b)=>(a+parseInt(b)),0);
            generateResult(result,operation,values);
            break;
        case 'multiplication':
            result=values.reduce((a,b)=>(a*parseInt(b)),1);
            generateResult(result,operation,values);
            break;
        case 'subtraction':
            if(values.length==2){
                result=values[0]-values[1];
                generateResult(result,operation,values);
            }
            else{
                console.log("Subtraction takes only two values for input");
            }
            break;
        case 'division':
            if(values.length==2 && values[1]!=0){
                result=values[0]/values[1];
                generateResult(result,operation,values);
            }
            else{
                console.log("Division takes only two values for input and the second value should not be zero");
            }
            break;
        default:
            console.log("choose a valid operation");    

    }
}
else{
    console.log("Provide valid arguments");
}



