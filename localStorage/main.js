const listStudents = [
    { id: 1, name: "Hoàng", age: 20, className: "abc" },
    { id: 2, name: "Nam", age: 21, className: "abc" },
    { id: 3, name: "Dũng", age: 22, className: "abc" },
  ];
  localStorage.setItem("list",JSON.stringify(listStudents));
  console.log(JSON.parse(localStorage.getItem("list")));
var data = JSON.parse(localStorage.getItem("list"))
var ul =document.getElementById("danhsach")
var strHTML = "";
  for(let i=0;i<data.length;i++){
      strHTML+=`<li>${data[i].name}</li>`;
  };
  ul.innerHTML=strHTML

