'use strict';
let hours=['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','total'];
let tableID=document.getElementById('tableID');
let arrTotal=[0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let totals=0;



function randomValue(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}



function Store(location,minCust,maxCust,avgCook){
  this.location=location;

  this.minCust=minCust;

  this.maxCust=maxCust;

  this.avgCook=avgCook;

  this.custPerHour=[];

  this.cook=[];
  
  this.total=0;
}





Store.prototype.calccustPerHour=function(){
  for(let i=0;i<hours.length-1;i++){
    this.custPerHour.push(randomValue(this.minCust,this.maxCust));
  }
};



Store.prototype.calccookPerhour=function(){
  for(let i=0;i<hours.length-1;i++){
    this.cook.push(this.custPerHour[i]*Math.floor(this.avgCook));
    this.total=this.total+this.cook[i];
    arrTotal[i]=arrTotal[i]+this.cook[i];
  }
  this.cook[this.cook.length]=this.total;
  totals+=this.total;
};



Store.prototype.createElement=function(){
  let tableRow=document.createElement('tr');
  tableID.appendChild(tableRow);
  let tdEl1=document.createElement('td');
  tableRow.appendChild(tdEl1);
  tdEl1.textContent=this.location;
  let tdEl;
  for (let i=0;i<this.cook.length;i++){
    tdEl=document.createElement('td');
    tableRow.appendChild(tdEl);
    tdEl.textContent=this.cook[i];
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
  tdEl1.textContent='stores';
  let thEl;

  for (let i = 0;i<hours.length;i++){
    thEl=document.createElement('th');
    tableRow.appendChild(thEl);
    thEl.textContent=hours[i];
  }
}




function footers(){
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



let seattle = new Store('Seattle',23,65,6.3);
seattle.calccustPerHour();
seattle.calccookPerhour();
seattle.createElement();


let tokyo = new Store('Tokyo',3,24,1.2);
tokyo.calccustPerHour();
tokyo.calccookPerhour();
tokyo.createElement();


let dubai = new Store('Dubai',11,38,3.7);
dubai.calccustPerHour();
dubai.calccookPerhour();
dubai.createElement();


let paris = new Store('Paris',20,38,2.3);
paris.calccustPerHour();
paris.calccookPerhour();
paris.createElement();


let lima = new Store('Lima',2,16,4.6);
lima.calccustPerHour();
lima.calccookPerhour();
lima.createElement();

footers();

