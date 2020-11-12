$(function(){
  $('#addToDoBtn').click(function(){
    let todos = [];
    let todo = $('#do').val();
    if (() && (todo in todos)) {
      $('#todos').prepend(`<div id="todo-${todo}"  class="col-lg-6"><div class="card card-body m-2">${todo}</div></div>`);
      todos.append(todo);
      $('#todoError').remove();
    } else if () {

    } else {
      $('#todoForm').prepend(`<p id="todoError" class="alert alert-danger text-center">Todo input should not be empty.</p>`)
    }
    
  });
});