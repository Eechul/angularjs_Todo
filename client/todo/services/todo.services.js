// service define ways
//1. service
//2. factory
//3. provider
app.factory('todoStorage', ($http) => {
  var storage = {
    todos: [],
    // no underbar => public
    get: function(callbackFunc) {
         $http.get("/todo")
        .then( (response) => {
          if(response.data) {
            callbackFunc(storage.todos = response.data)
          } else {
            console.error('TodoCtrl get Error!')
          }
      });
    },
    
    add: function(newTodoTitle, callbackFunc) {
      let newTodoItem = {
        title: newTodoTitle,
        completed: false,
        createAt: new Date()
      }
      $http.post("/todo/add", newTodoItem)
        .then( (response) => {
          if(response.data) {
            callbackFunc(storage.todos = response.data);
          } else {
            console.error('TodoCtrl post Error!')
          }
      })
    },
    
    remove: function(todo, callbackFunc) {
      $http.delete("/todo/delete/"+todo._id)
        .then(function(response) {
          if(response.data) {
            callbackFunc(storage.todos = response.data);
          } else {
            console.error('TodoCtrl delete Error!');
          }        
        });
    },
    
    update: function(index) {
      $http.put("todo/put", JSON.stringify(storage.todos[index]))
      .then( (response) => {
        if(response.data) {
          // success
        } else {
          console.error('TodoCtrl put Error!')
        }
      })
    }
  }
  return storage;
})

