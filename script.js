// This jQuery have some explanation. I hope you like it!

$(function(){
  // Place for storing todos, it will be use for checking if object is already existed
  let todos = [];
  
  // Trigger click event then do the code below
  $('#addToDoBtn').click(function(){
    // Get the input value
    let todo = $('#do').val();

    // Check input if that is already in todos
    if (todos.includes(todo)) {
      $('#todoError').remove();
      $('#todoForm').prepend(`<p id="todoError" class="alert alert-danger text-center">${todo} is already in todos.</p>`)
    } else if (todo != '') { // Check input if its not empty.
      $('#todoError').remove();
      $('#todos').prepend(`<div class="col-lg-6 pointer"><div id="${todo}-todo" class="card card-body m-2 todo">${todo}</div></div>`);
      todos.unshift(todo);
    } else { // Gives error when those conditions are not met
      $('#todoForm').prepend(`<p id="todoError" class="alert alert-danger text-center">Todo input should not be empty.</p>`)
    }
    
    // Remove the value of input
    $('#do').val('');

    // Remove div#noTodos when there is todo
    if (todos.length != 0) {
      $('#noTodos').remove();
    }
  });
});