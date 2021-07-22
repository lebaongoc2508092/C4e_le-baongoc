// var p = document.getElementsByTagName('p')
// var input = document.getElementById("ip")
// var but = document.getElementById('up')
// var button = document.getElementById('low')

const listStudents = [
    { id: 1, name: "Hoàng", age: 20, className: "abc" },
    { id: 2, name: "Nam", age: 21, className: "abc" },
    { id: 3, name: "Dũng", age: 22, className: "abc" },
  ];

 function render(){
let table = document.querySelector("#list-Students tbody");
console.log(table)
let strHTML="";
for(let i = 0 ; i < listStudents.length; i++){
    strHTML+=`<tr><td>${listStudents[i].id}</td><td>${listStudents[i].name}</td><td>${listStudents[i].age}</td><td>${listStudents[i].className}</td>
    <td><button onclick="delete_studen(${listStudents[i].id})">xoa</button></td>
    <td><button onclick="edit_studen(${listStudents[i].id})">sua</button></td></tr>`
}

console.log(strHTML)
table.innerHTML=strHTML;
 }


function start(){
    render();
}

function addNew(){
    let  ip = document.querySelectorAll('input');
    let studen = {
        id: listStudents.length + 1 ,
        name: ip[0].value,
        age: ip[1].value,
        className: ip[2].value,
    };
    listStudents.push(studen);
    console.log(listStudents)
    render();
    
}
document.getElementById('btn-on').onclick = addNew;
start();
function delete_studen(id){
    let index = listStudents.findIndex(function(item){
        return item.id === id;
    });
    listStudents.splice(index,1)
    render();
}
let  ip = document.querySelectorAll('input');
let edit = 0;
function edit_studen(id){
    let index = listStudents.findIndex(function(item){
        return item.id === id;
    });
    edit = index;
    ip[0].value = listStudents[index].name;
    ip[1].value = listStudents[index].age;
    ip[2].value = listStudents[index].className;

}
document.getElementById('btn2-on').onclick=function(){
    listStudents[edit].name=ip[0].value;
    listStudents[edit].age=ip[1].value;
    listStudents[edit].className=ip[2].value;
    render();
}
let search = document.getElementById('search');
function timkiem(){
    let a = listStudents.find(function(item){
        return listStudents = search
        
    }







 