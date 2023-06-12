function setDateinLocalDatabase(todo) {
    // Check if the browser supports Local Storage
    if (!window.localStorage) {
      console.log("Your browser does not support Local Storage.");
      return;
    }
  
    // Set some data in Local Storage
    localStorage.setItem(todo, JSON.stringify(todo));
  
    // Get the data from Local Storage
   //var toDoItem = JSON.parse(localStorage.getItem(todo));
  
    //console.log(toDoItem);
  }


function addToDoItem(){
    var inputfield = document.getElementById("txtfield");
    if(inputfield.value == ""){
        window.alert("Bitte ToDo eingeben");
    }
    else{
         
        setDateinLocalDatabase(inputfield.value);
        loadItemToDiv(inputfield.value);
        inputfield.value = "";
        
         
    }
}

function deleteIteminLocalstorage(itemname){
    localStorage.removeItem(itemname);
}


function loadLocalData(){

    console.log(localStorage.length);

    for(var i = 0; i < localStorage.length; i++){

        console.log(localStorage.getItem(localStorage.key(i)));
        var temp = JSON.parse(localStorage.getItem(localStorage.key(i)))
        loadItemToDiv(temp);
    }

    
}

function loadItemToDiv(todoitem){
    
 
    var todo = document.getElementsByClassName("toDoItems");
     var l = document.createElement("label");
    var chBox = document.createElement("input");
    
    chBox.type = "checkbox";
    chBox.id = todoitem;
    chBox.className = "todochk"
    l.id = todoitem;
    l.className = "todoLabel";
    l.htmlFor = todoitem;
    chBox.setAttribute("onchange","onchangechBox()");

 
    l.innerHTML =  todoitem;
    
    l.appendChild(chBox);
    todo[0].appendChild(l);
 
}

function deleteAllITEMS(){

    localStorage.clear();
    setTimeout(function(){
        location.reload();
     },250);
}

 