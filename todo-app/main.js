var rIndex,
  table = document.getElementById("table");

         // check the empty input
         function checkEmptyInput(){
             var isEmpty = false,
             name = document.getElementById("name").value,
             priority = document.getElementById("priority").value,
             date = document.getElementById("date").value;
             
             if(name===""){
                 alert("task name cannot be empy");
                 isEmpty=ture;
             }
             else if(priority===""){
                 alert("Priority cannot be empy");
                 isEmpty=ture;
             }
             else if(date===""){
                 alert("Date cannot be empy");
                 isEmpty=ture;
             }
             return isEmpty;
                
         }

        function addHtmlTableRow(){
            //get the table by id
            //create a new row and cells
            //get value from input text
            // set the values into row cells
            if (! checkEmptyInput()){
            newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            name = document.getElementById("name").value,
            priority = document.getElementById("priority").value,
            date = document.getElementById("date").value;
            cell1.innerHTML = name;
            cell2.innerHTML = priority;
            cell3.innerHTML = date;
                        
            selectedRowToInput();
          }

        }
        function selectedRowToInput(){
            
            for(var i=1; i<table.rows.length; i++){
                table.rows[i].onclick = function()
                {
                    rIndex = this.rowIndex;
                    document.getElementById("name").value = this.cells[0].innerHTML;
                    document.getElementById("priority").value = this.cells[1].innerHTML;
                    document.getElementById("date").value = this.cells[2].innerHTML;
                    // console.log(rIndex);
                }
            }
        }
        selectedRowToInput()
        function editSelectedRow(){
            var name = document.getElementById("name").value,
                priority = document.getElementById("priority").value,
                date = document.getElementById("date").value;

            if (! checkEmptyInput()){
            table.rows[rIndex].cells[0].innerHTML= name;
            table.rows[rIndex].cells[1].innerHTML= priority;
            table.rows[rIndex].cells[2].innerHTML= date;
           }
        }
        function deleteSelectedRow(){ 
            table.deleteRow(rIndex);
            
        }