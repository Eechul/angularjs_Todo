// Code goes here
let app = angular.module('todo')

app.controller('TodoCtrl', ($scope, todoStorage)  => {

  todoStorage.get((dataResponse) => {
    $scope.todos = dataResponse
  });

  $scope.remove = function(todo) {
    todoStorage.remove(todo, (dataResponse) => {
      $scope.todos = dataResponse
    })
  }
  
  $scope.add = function(newTodoTitle) {
     todoStorage.add(newTodoTitle, (dataResponse) => {
       $scope.todos = dataResponse
     });
    $scope.newTodoTitle = "";
  } 
   
  
  $scope.update = function(index) {
    todoStorage.update(index)
  }
})
