window.setTimeout(function(){
var todo=["Buy me a new turtle"];
var ask=prompt("What would you like to do?");
while(ask!=="quit")
{
    if (ask==="list")
    {
        console.log(todo);
    }
    else if(ask==="new")
    {
        var newtodo=prompt("Enter new todo:");
        todo.push(newtodo);
    }
    ask=prompt("What would you like to do?");
}
console.log("ok, You quit the app.");
}, 500);
