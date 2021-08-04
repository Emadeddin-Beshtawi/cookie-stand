
'use strict';

let hours=['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','total'];

let tableID = document.getElementById('tableID');

let arrTotal=[0,0,0,0,0,0,0,0,0,0,0,0,0,0];

let totals=0;


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

