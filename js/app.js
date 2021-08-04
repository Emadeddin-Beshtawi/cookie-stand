
'use strict';

let hours=['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','total'];

let tableID=document.getElementById('tableID');

let arrTotal=[0,0,0,0,0,0,0,0,0,0,0,0,0,0];

let totals=0;

let shopArray=[];

let footer = document.createElement('tfoot');



function randomValue(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}



function Shop (city, minimumClients, maximumClients, avgPreparing)
{

  this.city = city;

  this.minimumClients = minimumClients;

  this.maximumClients = maximumClients;

  this.avgPreparing = avgPreparing;

  this.clientsPerHour=[];

  this.prepare=[];
  
  this.total=0;
}





Shop.prototype.calcclientsPerHour = function()
{
  for(let i=0;i<hours.length-1;i++)
  {
    this.clientsPerHour.push(randomValue(this.minimumClients,this.maximumClients));
  }
};



Shop.prototype.calcpreparePerhour = function()
{
  for(let i=0;i<hours.length-1;i++)
  {
  this.prepare.push(this.clientsPerHour[i]*Math.floor(this.avgPreparing));

    this.total=this.total+this.prepare[i];

    arrTotal[i]=arrTotal[i]+this.prepare[i];

  }

  this.prepare[this.prepare.length]=this.total;

  totals+=this.total;
};



Shop.prototype.createElement=function()
{

  let tableRow=document.createElement('tr');

  tableID.appendChild(tableRow);

  let tdEl1=document.createElement('td');

  tableRow.appendChild(tdEl1);

  tdEl1.textContent=this.city;

  let tdEl;

  for (let i=0;i<this.prepare.length;i++)

  {
    tdEl=document.createElement('td');

    tableRow.appendChild(tdEl);

    tdEl.textContent=this.prepare[i];
  }
};




function heading()

{

  let thead = document.createElement('thead');

  tableID.appendChild(thead);

  let tableRow=document.createElement('tr');

  thead.appendChild(tableRow);

  let tdEl1 = document.createElement('td');

  tableRow.appendChild(tdEl1);

  tdEl1.textContent='Branches';

  let thEl;

  for (let i = 0;i<hours.length;i++)

  {
    thEl=document.createElement('th');

    tableRow.appendChild(thEl);

    thEl.textContent=hours[i];
  }
}




function footers()
{

  let footer = document.createElement('tfoot');

  tableID.appendChild(footer);

  let tableRow = document.createElement('tr');
  footer.appendChild(tableRow);

  let tdEl1 = document.createElement('td');

  tableRow.appendChild(tdEl1);

  tdEl1.textContent = 'total';
  let tdEl;

  for (let i=0; i<hours.length-1; i++){

    tdEl=document.createElement('td');

    tableRow.appendChild(tdEl);

    tdEl.textContent = `${arrTotal[i]}`;
  }

  tdEl = document.createElement('td');

  tableRow.appendChild(tdEl);

  tdEl.textContent=`${totals}`;
}



const form =document.getElementById('Branches-Report');
form.addEventListener('submit',shopes);

function shopes(event){
  event.preventDefault();

  let shopName = event.target.shopName.value;

  let minimumClients = event.target.minimumClients.value;

  let maximumClients = event.target.maximumClients.value;

  let avgPreparing = event.target.avgPreparing.value;
// console.log(shopName);

// console.log(minimumClients );

// console.log(maximumClients);
// console.log(avgPreparing);


  let newShop = new Shop(shopName, minimumClients, maximumClients, avgPreparing);

  newShop.calcclientsPerHour();
  newShop.calcpreparePerhour();
  newShop.createElement();

  // console.log(newShop);

  tableID.deleteRow(tableID.rows.length-1);
  footers();
}



heading();


let seattle = new Shop ('Seattle',23,65,6.3);
seattle.calcclientsPerHour();
seattle.calcpreparePerhour();
seattle.createElement();


let tokyo = new Shop ('Tokyo',3,24,1.2);
tokyo.calcclientsPerHour();
tokyo.calcpreparePerhour();
tokyo.createElement();


let dubai = new Shop ('Dubai',11,38,3.7);
dubai.calcclientsPerHour();
dubai.calcpreparePerhour();
dubai.createElement();


let paris = new Shop ('Paris',20,38,2.3);
paris.calcclientsPerHour();
paris.calcpreparePerhour();
paris.createElement();


let lima = new Shop ('Lima',2,16,4.6);
lima.calcclientsPerHour();
lima.calcpreparePerhour();
lima.createElement();

footers();

