const liste=document.getElementById("list")

liste.addEventListener("click",function(add){
    add.target.classList.toggle("checked")
})

function addToDo(){
    let li =document.createElement("li")
    let task=document.getElementById("task")
    li.textContent=task.value
    
    if(task.value.trim()==""){        
        $("#liveToastError").toast('show');
    }
    else{
        $("#liveToast").toast('show');
        liste.append(li)
        localStorage.setItem("items",JSON.stringify(liste.innerText))
    }
    
    task.value=""

    var x = document.createTextNode("\u00D7");
    var span = document.createElement("SPAN");
    span.className = "close";
    span.appendChild(x);
    li.appendChild(span)

    var close = document.getElementsByClassName("close");
    
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var del = this.parentElement;
            localStorage.removeItem("this.parentElement")
            del.style.display = "none";
        }
    }

}