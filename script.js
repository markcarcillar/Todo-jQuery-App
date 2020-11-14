// This jQuery have some explanation using comment. I hope you like it!
// By: Mark Angelo Carcillar

$(function(){
  // Place for storing todos, it will be use for checking if object is already existed
  let todos = [];

  // Trigger click event then do the code below
  $('#addToDoBtn').click(function(){
    // Get the input value
    let todo = $('#do').val();

    let selectedTodos = [];
  
    // Check input if that is already in todos
    if (todos.includes(todo)) {
      $('.todoError').remove();
      $('#todoForm').prepend(`<p class="todoError alert alert-danger text-center">${todo} is already in todos.</p>`)
    } else if (todo != '') { // Check input if its not empty.
      $('.todoError').remove();
      $('#todos').prepend(`<div class="col-lg-6 pointer"><div class="card card-body m-2 todo">${todo}</div></div>`);
      todos.unshift(todo);

      $('.todo').on('click', function(){
        let todo = $(this).text()
        if (selectedTodos.includes(todo)){
          let indexOfTodo = selectedTodos.indexOf(todo);
          $(this).removeClass('todo-border');
          selectedTodos.splice(indexOfTodo, 1);
          
        } else if (!selectedTodos.includes(todo)) {
          $(this).addClass('todo-border');
          selectedTodos.unshift(todo);
        }

        // NOT DONE YET - For removing the selected todos.
        // if (selectedTodos.length > 0){
        //   $('#todosContainer').append('<div class="row my-3"><div class="col-md-8 col-lg-7 mx-auto"><button id="clearAllSelectedTodos" class="btn btn-block btn-outline-danger">Clear All Selected Todos</button></div></div>');
        // } else if (selectedTodos.length <= 0) {
        //   $('#clearAllSelectedTodos').remove();
        // }

        // $('#clearAllSelectedTodos').click(function(){

        // });

      });
    } else { // Gives error when those conditions are not met
      $('.todoError').remove();
      $('#todoForm').prepend(`<p class="todoError alert alert-danger text-center">Todo input should not be empty.</p>`)
    }
    
    // Remove the value of input
    $('#do').val('');
  
    // Remove div#noTodos when there is todo
    if (todos.length != 0) {
      $('#noTodos').hide();
      $('#clearTodos').show();
    }
  });
  
  if (todos.length <= 0) {
    $('#clearTodos').hide();
  }

  // Submit input when user hits enter
  $(document).keydown(function(event){
    if (event.which == 13){
      $('#addToDoBtn').trigger('click');
      event.preventDefault();
    }
  });

  // Clear todos
  $('#clearTodos').click(function(){
    $('#todos').empty();
    $('#clearTodos').hide();
    $('#noTodos').show();
    $('.todoError').remove();
    selectedTodos = [];
    todos = [];
  });

  // Trigger #clearTodos when Del on keyboard has been clicked
  $(document).keydown(function(event){
    if (event.which == 46) {
      $('#clearTodos').trigger('click');
    }
  });
});