let btn;

function getBrowserType(){
    if(navigator.userAgent.indexOf("Chrome") !== -1){
        console.log("The user is using Chrome.");
    }
    else if(navigator.userAgent.indexOf("Firefox") !== -1){
        console.log("The user is using Firefox.");
    }
    else if(navigator.userAgent.indexOf("Safari") !== -1){
        console.log("The user is using Safari.");
    }
    else if(navigator.userAgent.indexOf("Edge") !== -1){
        console.log("The user is using Edge.");
    }
    else if(navigator.userAgent.indexOf("Trident") !== -1){
        console.log("The user is using Internet Explorer.");
    }
    else{
        console.log("The user is using an unknown browser");
    }
    
}

function navbaropen(){
    
    var navibar = document.getElementById("navbar");
    if(navibar.style.opacity == "1"){
    navibar.style.opacity = "0";
    navibar.style.pointerEvents = "none";
    navibar.style.transform = "translateX(100%)";
    navibar.style.transition = "0.5s"
    }
    else{
        navibar.style.opacity = "1";
        navibar.style.transform = "translateX(0%)";
        navibar.style.transition = "0.5s ease-in"
        navibar.style.right = "0px";
        navibar.style.pointerEvents = "fill";
         
        
    }

}

function clearInput(){
    var inputfield = document.getElementById("txtfield");
    if(inputfield.value == ""){
        window.alert("Bitte ToDo eingeben");
    }
    else{
         
        addItemToLocalDB(inputfield.value);
        getItemNumberinLocalDB();
        
         
    }
}

function addToDo(){
  

    var inputfield = document.getElementById("txtfield");
    console.log(inputfield.value);
    var todo = document.getElementsByClassName("toDoItems");
     var l = document.createElement("label");
    var chBox = document.createElement("input");
    
    chBox.type = "checkbox";
    chBox.id = inputfield.value;
    chBox.className = "todochk"
    
    l.htmlFor = inputfield.value;
    chBox.setAttribute("onchange","onchangechBox()");

 
    l.innerHTML =  inputfield.value;
    
    l.appendChild(chBox);
    todo[0].appendChild(l);
   
    inputfield.value = "";
}

function onchangechBox(){
    checkboxChecked();
}


function checkboxChecked(){

    var chkBox = document.getElementsByClassName("todochk");
    var label;

    for(var i = 0; i< chkBox.length; i++){
        if(chkBox[i].checked){
           
          label = document.getElementById(chkBox[i].id);
           
          label.style.textDecoration = "line-through";
          
        }
        else{
            label = document.getElementById(chkBox[i].id);
             
            label.style.textDecoration = "none";
        }
    }
}

function getLabelTextdecoration(){
    var lbl = document.getElementsByClassName("todoLabel");
    var reloadPage = false
    for(i = 0; i < lbl.length; i++){
        
        if(lbl[i].style.textDecoration == "line-through")
        {
            reloadPage = true;
             deleteIteminLocalstorage(lbl[i].id);
        }
    }
    if(reloadPage){
    location.reload();
    }
    else{
        window.alert("Waehle das zu löschende Element zuerst aus!");
    }
}

function clearItemsAndDB(){
    clearLocalDB();
     setTimeout(function(){
        location.reload();
     },250);
}
var bool = true;
window.onload = function(){
     btn = document.querySelector("#BtnHinzu");
     btnDEL = document.querySelector("#deleteBtn");
     btn.addEventListener('click', function(){
        //clearInput();
         addToDoItem();
     });
     btnDEL.addEventListener('click',function(){
        getLabelTextdecoration();
     });
     
    
    /* bool = createLocalDatabase();
     createLocalDatabase();
     getBrowserType();
     if(bool){
     getItemsFromLocalDB();
    }
    else{
        createLocalDatabaseFirefox();
    }
    */

    loadLocalData();

}


  

 