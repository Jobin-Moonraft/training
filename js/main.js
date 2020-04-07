function createTodo(){
    document.getElementById("box").style.display = "inline-block";
}
function hideTodo(){
    document.getElementById("box").style.display = "none";
}
window.onclick = function(event) {
    if (event.target == box) {
      box.style.display = "none";
    }
  }


function checkEmptyInput(){               
           
    var isEmpty = false,
    todo_input = document.getElementById("todo-input").value,
    todo_date = document.getElementById("todo-date").value,
    todo_time = document.getElementById("todo-time").value;
                            
                    
   if(todo_input===""){
    document.getElementById("text-message").innerHTML = "* Plase Enter Task Name";
        isEmpty=ture;
    }
    else if(todo_date===""){
        document.getElementById("date-message").innerHTML = "* Plase Enter Date";
        isEmpty=ture;
    }
    else if(todo_time===""){
        document.getElementById("time-message").innerHTML = "* Plase Enter Time";
        isEmpty=ture;
    }
    
    return isEmpty;
   
       
}


 function validation(){
     var a = document.forms.priority;
     for(var i=0; i<a.length; i++){
         if(a[i].checked ==true)
         return true;
     }
     document.getElementById("message").innerHTML = "* Plase Select anyone";
     return false;
 }   

var add_todo_btn = document.getElementById("add-btn");
var todo_input = document.getElementById("todo-input");
var todo_date= document.getElementById("todo-date");
var todo_time = document.getElementById("todo-time");
var list= document.getElementById("list");
var  priority = document.querySelector("h3");


add_todo_btn.addEventListener('click', function(){
    if(!checkEmptyInput()) {
    if(validation()){
        hideTodo()                       
    var input = todo_input.value;
    var date = todo_date.value;
    var time = todo_time.value;  
    //priority section
    var Selected = document.querySelector('input[type= "radio"]:checked');
    priority.innerText = Selected.value;    
    var todo_priority= document.createElement('OPTION');
    todo_priority.classList.add('item-priority');
    todo_priority.textContent = Selected.value;
      

    var item = document.createElement('DIV');
    item.classList.add('item');  
    var item_text = document.createElement('DIV');
    item_text.classList.add('item-text');
    var item_date = document.createElement('DIV');
    item_date.classList.add('item-date');
    var item_time = document.createElement('DIV');
    item_time.classList.add('item-time');   
    item_text.textContent = input;
    item_date.textContent = date;
    item_time.textContent = time;
   
    
    var edit_input1 = document.createElement('INPUT');
    edit_input1.classList.add('edit-input1');
    var edit_input2 = document.createElement('INPUT');
    edit_input2.classList.add('edit-input2');
    var edit_input3 = document.createElement('INPUT');
    edit_input3.classList.add('edit-input3');    
    edit_input1.classList.add("hidden");
    edit_input2.classList.add("hidden");
    edit_input3.classList.add("hidden");   
    edit_input1.name = 'edit-input1';
    edit_input2.name = 'edit-input2';
    edit_input3.name = 'edit-input3';    
    edit_input1.type ='text';
    edit_input2.type ='date';
    edit_input3.type ='time';
    edit_input1.value= input;
    edit_input2.value= date;
    edit_input3.value= time;
       
    var edit_input_btn = document.createElement('BUTTON');
    edit_input_btn.textContent = 'UPDATE';
    edit_input_btn.classList.add('action-btn');
    edit_input_btn.classList.add('update-btn');
    edit_input_btn.classList.add("hidden");    
    edit_input1.type ='text';
    edit_input2.type ='date';
    edit_input3.type ='time';
     
       

    var action_btns = document.createElement('DIV');
    action_btns.classList.add('action-btns'); 
    var edit_btn = document.createElement('BUTTON');
    edit_btn.classList.add('action-btn');
    edit_btn.classList.add('edit-btn');
    edit_btn.textContent = 'EDIT';

    //EDIT todo
    edit_btn.addEventListener('click', function(){
        
        edit_btn.classList.remove("hidden");
        item_text.classList.add("hidden");
        item_date.classList.add("hidden");
        item_time.classList.add("hidden");        
        edit_input1.classList.remove("hidden");
        edit_input2.classList.remove("hidden");
        edit_input3.classList.remove("hidden");        
        edit_input_btn.classList.remove("hidden");
        edit_input_btn.addEventListener('click', function(){
            
            item_text.textContent = edit_input1.value;
            item_date.textContent = edit_input2.value;
            item_time.textContent = edit_input3.value;            
            edit_input1.classList.add("hidden");
            edit_input2.classList.add("hidden");
            edit_input3.classList.add("hidden");                        
            item_text.classList.remove("hidden");
            item_date.classList.remove("hidden");
            item_time.classList.remove("hidden");            
            edit_input_btn.classList.add("hidden");
           
        })
        
    });


    var remove_btn = document.createElement('BUTTON');
    remove_btn.classList.add('action-btn');
    remove_btn.classList.add('remove-btn');
    remove_btn.textContent = 'DELETE';
    // delete todo
    remove_btn.addEventListener('click', function(){
        item.parentNode.removeChild(item);

    });
    
    action_btns.append(edit_input_btn);
    action_btns.append(edit_btn);
    action_btns.append(remove_btn);
    item.append(item_text);
    item.append(item_date);
    item.append(item_time); 
    item.append(todo_priority);    
    item.append(edit_input1);
    item.append(edit_input2);
    item.append(edit_input3);    
    item.append(action_btns);
    
    list.append(item);
    todo_input.value = "";
    todo_date.value = "";
    todo_time.value = "";

 }   
}
});
