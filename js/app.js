'use strict';

function Addemployee(name,email,department,randomNum){
  this.name=name;
  this.email=email;
  this.department=department;
  this.randomNum=randomNum;
  Addemployee.all.push(this);
}
Addemployee.all=[];
let sumData=[];
let data=[];
let localData= JSON.parse(localStorage.getItem('employe'));
if (localData===null){
  localData=[];
}
data=localData;
console.log(localData);


let renderHeader = function(){
  let tablediv =document.getElementById('tablediv');
  let table = document.createElement('table');
  // table.style.visibility='hidden';
  table.setAttribute('id','table');
  tablediv.appendChild(table);
  let trHeader=document.createElement('tr');
  table.appendChild(trHeader);
  let th1 =document.createElement('th');
  trHeader.appendChild(th1);
  th1.textContent= 'Name';

  let th2 =document.createElement('th');
  trHeader.appendChild(th2);
  th2.textContent= 'Email';

  let th3 =document.createElement('th');
  trHeader.appendChild(th3);
  th3.textContent= 'Department';

  let th4 =document.createElement('th');
  trHeader.appendChild(th4);
  th4.textContent= 'Salary ';


};
renderHeader();
for (let i = 0; i < localData.length; i++) {
  sumData.push(localData[i][3]);
  let table =document.getElementById('table');
  let trEle =document.createElement('tr');
  table.appendChild(trEle);

  let tdEle1=document.createElement('td');
  trEle.appendChild(tdEle1);
  tdEle1.textContent= localData[i][0] ||this.name; //----name

  let tdEle2=document.createElement('td');
  trEle.appendChild(tdEle2);
  tdEle2.textContent= localData[i][1] ||this.email; //---email

  let tdEle3=document.createElement('td');
  trEle.appendChild(tdEle3);
  tdEle3.textContent= localData[i][2] ||this.department; //--- Department

  let tdEle4=document.createElement('td');
  trEle.appendChild(tdEle4);
  tdEle4.textContent= localData[i][3] ||this.randomNum ; //-- Salary   random


}

Addemployee.prototype.render=function(){

  let table =document.getElementById('table');
  let trEle =document.createElement('tr');
  table.appendChild(trEle);

  let tdEle1=document.createElement('td');
  trEle.appendChild(tdEle1);
  tdEle1.textContent= this.name; //----name

  let tdEle2=document.createElement('td');
  trEle.appendChild(tdEle2);
  tdEle2.textContent= this.email; //---email

  let tdEle3=document.createElement('td');
  trEle.appendChild(tdEle3);
  tdEle3.textContent= this.department; //--- Department

  let tdEle4=document.createElement('td');
  trEle.appendChild(tdEle4);
  tdEle4.textContent= this.randomNum ; //-- Salary   random


};
let total =0 ;
function sum (){
  for (let i = 0; i < sumData.length; i++) {
    total= total + sumData[i];
  }
  console.log(sumData);
}
sum();
console.log(total);
let tablediv =document.getElementById('tablediv');
let para =document.createElement('p');
tablediv.appendChild(para);
para.textContent= `Total = ${total}` ;

let form =document.getElementById('Employee');
form.addEventListener('submit', newEmployee);

function newEmployee(event){
  // event.preventDefault();
  let employeeName = event.target.Name.value;

  let email= event.target.Email.value;

  let department = event.target.Department.value;

  let randonNumber=Math.floor(getRandomArbitrary(100,500));

  data.push([employeeName,email,department,randonNumber]);
  localStorage.setItem('employe', JSON.stringify(data));
  // document.getElementById('table').style.visibility='visible';
  let newE = new Addemployee (employeeName,email,department,randonNumber);

  newE.render();
  form.reset();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
