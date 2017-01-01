

app.directive('todoTitle', () => {
  return {
    template: '<h1>투두 목록</h1>'
  }
});

app.directive('todoExplanation', () => {
  return {
    template: '<p>간단한 todo 목록입니다.</p>'
  }
});

app.directive('todoItem', () =>{
  return {
    templateUrl: '/todo/template/todoItem.template.html'

  }
})

app.directive('todoFilters', () => {
  return {
    templateUrl: '/todo/template/todoFilters.template.html'
  }
})

app.directive('todoForm', () => {
  return {
    templateUrl: '/todo/template/todoForm.template.html'
  }
})