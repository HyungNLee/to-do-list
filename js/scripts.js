function Todo(name, id) {
  this.name = name;
  this.done = false;
  this.id = id;
}

Todo.prototype.finishTask = function() {
  this.done = !this.done;
}



$(document).ready(function() {
  var todos = [];
  var index = 0;

  $("#formOne").submit(function(event) {
    event.preventDefault();

    var userInput = $("#inputBox").val();

    todos.push(new Todo(userInput, index));
    index++;

    var newTodo = todos[todos.length-1];

    $("#list").append("<li><span class='todo'>"+newTodo.name+"</span>"+ "<span class='removeX'> X </span>" + " <br>Task done: <span class='doneBool'>"+newTodo.done+"</span><span class='done'> ✓</span><span class='id hidden'>"+newTodo.id+"</span></li>");

    $(".done").last().click(function() {
      var id = parseInt($(this).next().text());
      var found = todos.find(function(item) {
        return (item.id === id);
      });
      found.finishTask();
      $(this).siblings(".doneBool").text(found.done);
    })

    $(".removeX").last().click(function() {
      var id = parseInt($(this).siblings(".id").text());
      var found = todos.find(function(item) {
        return (item.id === id);
      });
      var index = todos.indexOf(found);
      todos.splice(index, 1);
      this.parentNode.remove();
    })

  })

})
