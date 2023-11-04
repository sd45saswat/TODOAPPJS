let todo = [];

let req = prompt("please enter your request");

while(true) {
    if(req == "quit") {
         console.log("quitting app");
         break;
    }
    if(req == "list") {
         console.log("----------");
         for(let i=0; i<todo.length; i++) {
            console.log(i, todo[i]);
         }
         console.log("----------");
    }
    else if(req == "add") {
         let task = prompt("please enter the text that you want to add");
         todo.push(task);
         console.log("task added");
    }
    req = prompt("please enter your request");
}

              