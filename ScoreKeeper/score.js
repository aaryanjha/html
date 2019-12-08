var p01=document.querySelector("#p1");
var p02=document.querySelector("#p2");
var pl1=document.querySelector("play1");
var pl2=document.querySelector("play2");
var re=document.querySelector("#reset");
var inp=document.querySelector("input");
var total=document.querySelector("#limit");
var p1s=0;
var p2s=0;
var win=5;
var game=false;
play1.addEventListener("click",function(){
    if (!game)
    {
        p1s++;
        if (p1s===win)
        {
            p01.classList.add("gre");
            game=true;
        }
        p01.textContent=p1s;
    }
});
play2.addEventListener("click",function(){
    if (!game)
    {
        p2s++;
        if (p2s===win)
        {
            p02.classList.add("gre");
            game=true;
        }
        p02.textContent=p2s;
    }
});
re.addEventListener("click",function(){
    reset();
});
inp.addEventListener("change",function(){
    total.textContent=this.value;
    win=Number(this.value);
    reset();
});
function reset()
{
    p1s=0;
    p2s=0;
    p01.textContent=p1s;
    p02.textContent=p2s;
    p01.classList.remove("gre");
    p02.classList.remove("gre");
    game=false;
}