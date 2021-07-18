// let p = document.getElementsByTagName("p")
// p[0].innerHTML= "text"
// function logMess(){
//     let p = document.getElementsByTagName('p')
//     p[0].innerHTML="New string"
// };

// let btn = document.getElementById('btn')
// btn.onclick = function(){
//   console.log('new string')
// }
// let input = document.getElementById("ip")
// input.onchange = function(e){
//   console.log(e.target.value)
// }
// let btn = document.getElementById('btn')
// let input = document.getElementById("ip")
// let result = document.getElementById("result")
// btn.onclick = function(){
//   let vl = input.nodeValue 
//   result.innerHTML = vl
// };
// document.getElementById('select').onchange = function(e){
//   result.innerHTML = e.target.value
// }
let list =[
  {
    id : 1,
    title: "Thủ tướng: Chưa lường hết khó khăn khi cách ly xã hội toàn TPHCM",
    conten: " Thủ tướng nhấn mạnh, diễn biến dịch tại TPHCM còn phức tạp, khó lường, các ca lây nhiễm có thể tăng lên, còn các ổ dịch tiềm ẩn trong cộng đồng, nếu không có giải pháp tốt dễ dẫn đến vấn đề phức tạp.",

  },
  {
    id:2,
    title:'Hà Nội: Thêm 3 ca dương tính SARS-CoV-2 có liên quan TPHCM',
    conten:'hiều nay, Hà Nội ghi nhận thêm 3 ca dương tính SARS-CoV-2, đều là các trường hợp đã được cách ly tại khu vực phong tỏa thuộc chùm liên quan đến TPHCM.',

  },
];
 let post = document.getElementById("post");
 let len = list.length
 let strHTML = "";
 for ( i =0 ; i<= len; i++){
   strHTML += '<h1> ${list[i].title}</h1>';
   console.log(strHTML)
 };