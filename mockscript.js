const input = document.getElementById("inputtext");
const taskbox = document.querySelector(".taskbox");

function add()
{    //console.log(input.value);
    const newDiv = document.createElement("div")
    var li = document.createElement("li");
    li.innerHTML = input.value;
    const completebutton = document.createElement("button");
    completebutton.setAttribute("class","complete");
    completebutton.innerHTML = "Complete"
    const mark = document.createElement("button");
    mark.setAttribute("class","markr");
    mark.innerHTML = "mark"
    // taskbox.innerHtml.value = ol;
    newDiv.append(li,completebutton,mark);
    taskbox.appendChild(newDiv);
}
document.addEventListener("click",(event)=>
{
    if(event.target.className == "complete")
    {
        const removeitem = event.target.parentNode;
        removeitem.remove();
    }
    else if(event.target.className === "markr"){
        const removeItem = event.target.parentNode.childNodes[0] ;
        if(removeItem.classList.contains('strikeh')){
            removeItem.classList.remove('strikeh');
        }
        else
        {
            removeItem.classList.add('strikeh');
        }


    }
})

