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
    strHTML+=`<tr><td>${listStudents[i].id}</td><td>${listStudents[i].name}</td><td>${listStudents[i].age}</td><td>${listStudents[i].className}</td></tr>`
}
console.log(strHTML)
table.innerHTML=strHTML;
 }

// function render(){
//     for(let i = 0 ; i < listStudents.length; i++){
//         strHTML+=`<tr><td>${listStudents[i].id}</td><td>${listStudents[i].name}</td><td>${listStudents[i].age}</td><td>${listStudents[i].className}</td></tr>`
//     }
// }
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