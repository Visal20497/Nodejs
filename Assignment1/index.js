const readline=require("readline")
const {add,subtract,multiply}=require('./cal.js')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function PromptUser() {
    rl.question('Press 1 for the addition,Press 2 for the substration,Press 3 for the multiplication, Press 0 for the exit :', (choice) => {
        if (choice === "0") {
            rl.close()
            return;
        }
        rl.question("Enter the first number : ",(num1)=>{
            rl.question("Enter the Second number : ",(num2)=>{
                let result;
                switch (choice) {
                    case "1":
                        result=add(parseInt(num1),parseInt(num2))
                        console.log('Result : ',result)
                        break;
                        case "2":
                            result=subtract(parseInt(num1),parseInt(num2))
                            console.log('Result : ',result)
                            break;
                            case "3":
                                result=multiply(parseInt(num1),parseInt(num2))
                                console.log('Result : ',result)
                                break;
                    default:
                        console.log('Invalid choice. Please try again.');
                        break;
                }
                PromptUser()
            })
        })
    })
}
PromptUser();