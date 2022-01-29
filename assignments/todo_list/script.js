
var n = document.querySelector('input');
var btn = document.querySelector('button');
var todoList = document.querySelector('div.todos');
var count = 0;
btn.addEventListener('click', function(){
    var para = document.createElement('p');
    para.setAttribute('key', count);
    count += 1
    para.innerHTML= n.value;
    n.value = "";
    todoList.append(para);
    para.addEventListener('click', function(){
        todoList.removeChild(para);
    })

})