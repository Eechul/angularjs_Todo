// service define ways
//1. service
//2. factory
//3. provider
app.factory('todoStorage', () => {
  var TODO_DATA = 'TODO_DATA'
  var storage = {
    todos: [],
    
    // underbar => private
    _saveToLocalStorage: function(data) {
      localStorage.setItem(TODO_DATA, JSON.stringify(data))
    },
    
    _getFormLocalStorage: function() {
      return JSON.parse(localStorage.getItem(TODO_DATA)) || [];
    },
    
    // no underbar => public
    get: function() {
      angular.copy(storage._getFormLocalStorage(), storage.todos)
      return storage.todos;
    },
    
    add: function(newTodoTitle) {
      var newTodoItem = {
        title: newTodoTitle,
        complated: false,
        createAt: Date.now()
      }
      storage.todos.push(newTodoItem);
      storage._saveToLocalStorage(storage.todos);
    },
    
    remove: function(todo) {
      var idx = storage.todos.findIndex(function(item) {
        return item.title === todo.title;
      });
    
      if(idx > -1) {
        storage.todos.splice(idx, 1);
        storage._saveToLocalStorage(storage.todos);
      } else {
        alert('error !!');
      } 
    },
    
    update: function() {
      // all update
      storage._saveToLocalStorage(storage.todos);
    }
  }
  
  return storage;
})

