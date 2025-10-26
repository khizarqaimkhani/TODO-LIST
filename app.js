 var list = document.getElementById("list");

       
        function addTodo() {
          var todo = document.getElementById("todo");

          list.innerHTML += `<li> 
          <input type='text' value= '${todo.value}' disabled/>
           <button onclick ='deleteTodo(event)'> Delete </button>
           <button onclick = 'editTodo(event)'> Edit </button>
           </li>`;

          todo.value = "";
        }

      
        function addTodoEnter(event) {
          if (event.keyCode === 13) {
            addTodo();
          }
        }

       
        function deleteTodo(event) {
          if(confirm("Are you sure you want to delete this task?")) {
            event.target.parentNode.remove();
          }
        }

        
        function editTodo(event) {
          var input = event.target.parentNode.childNodes[1];
          input.setAttribute("class", "focus-input");
          input.disabled = false;
          input.focus();
          event.target.innerHTML = "Update";
          event.target.setAttribute("onclick", "updateTodo(event)");
        }

        
        function updateTodo(event) {
          var input = event.target.parentNode.childNodes[1];
          input.setAttribute("class", "");
          input.disabled = true;
          event.target.innerHTML = "Edit";
        }

        
        function deleteAll() {
          
          if(list.children.length === 0) {
            alert("There are no tasks to delete!");
            return;
          }
          
          
          if(confirm("Are you sure you want to delete all tasks?")) {
            list.innerHTML = "";
          }
        }