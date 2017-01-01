// Code goes here
let app = angular.module('todo')

app.controller('TodoCtrl', ($scope, $http) => {

  $http.get("/todo")
    .then(function(response) {
      if(response.data) {
        $scope.todos = response.data
      } else {
        console.log('TodoCtrl get Error!')
      }        
    });

  $scope.remove = function(todo) {
    $http.delete("/todo/delete/"+todo._id)
    .then(function(response) {
      if(response.data) {
        $scope.todos = response.data
      } else {
        console.log('TodoCtrl delete Error!')
      }        
    });
  }
  
  $scope.add = function(newTodoTitle) {
    let newTodoItem = {
      title: newTodoTitle,
      completed: false,
      createAt: new Date()
    }
    $http.post("/todo/add", newTodoItem)
    .then( (response) => {
      if(response.data) {
        $scope.todos = response.data
        $scope.newTodoTitle = "";
      } else {
        console.log('TodoCtrl post Error!')
      }
    })
  }
  
  $scope.update = function(todo, index) {
    $http.put("todo/put", JSON.stringify(todo))
    .then( (response) => {
      if(response.data) {
        console.log(response.data, index);
        $scope.todos[index] = response.data;
      } else {

      }
    })
  }
})
