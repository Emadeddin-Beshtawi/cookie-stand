
'user strict';

// step7 (b): We will use the method getElementById() to return an Element object representing the element whose id property matches the specified string.

// We will denote our id in HTML (div) and JS by 'saleslist'.

const saleslist = document.getElementById('saleslist');



// step 1: The hours of operation (6:00 AM to 8:00 PM for all locations)

let hours14 = ['6am','7am','8am','9am','10am','11am','12pm', '13pm','14pm','15pm','16pm','17pm','18pm','19pm'];

// step2: Now to create separate JS object literals for each shop location.

// step 3:To store the min/max hourly customers, and the average cookies per customer, in object properties

// JS object Seattle:

let seattle = {
 name: 'Seattle',   

 minimumCust: 23,
 
 maximumCust: 65,

 averageCust: 6.3,


 // step8 (a): We will add another property to calculate the total

total: 0,





//  step 5: To calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated. 

// Store the results for each location in a separate array… perhaps as a property of the object representing that location

// It will be an array (empty) and it will fill hourly and it will contain 14 items of numbers for each hour, because it's a simulated between the average and the number that generated from the minCust, maxCust (in step 4)

cookiesSales14: [],

// step 6: We want to create a method to fill the previous empty array (cookiesSales14) with 14 elements. ( which represent cookies-sales per hour) 

// Also, we want to do multiply between the generated numbers (step4) and the averageCust (step3).

// we will use for loop inside getNoCookies function to generate 14 random numbers.

// we will use Math.ceil to obtain Integer numbers

// we will us the push() method to add new items to the end of the array (cookiesSales14).

getNoCookies: function(){

   for( let item14=0 ; item14< hours14.length; item14++) {

    // equation 1

    // this.cookiesSales14.push(Math.ceil (arbitraryNumber(this. minimumCust, this.maximumCust)* this.averageCust));
    
    // equation 1


    // step8 (b) We will assign new var (arbitraryAvgCust) and we will define it by  equation 1 (inside push only).

    // Note: we've commented equation 1 in step8 to do step8 (b)

    let arbitraryAvgCust = Math.ceil (arbitraryNumber(this. minimumCust, this.maximumCust)* this.averageCust);

    this.cookiesSales14.push(arbitraryAvgCust);

    this.total+= arbitraryAvgCust;

    // or this.total = this.total + arbitraryAvgCust;




   }

},

// step7(a): We will create another method called beshtawi to obtain the total

        // Note: beshtawi will show the data on the sales page (HTML)

 beshtawi: function(){


    // step7 (c): We will use the document.createElement() to create a new HTML element.
    //   Note: (.textContent) gets the content of the element

    // Note: The appendChild() method appends a node as the last child of a node.

    const h2 = document.createElement('h2');
    h2.textContent= this.name;
    saleslist.appendChild(h2);


    const unolist = document.createElement('ul');
    saleslist.appendChild(unolist);

    // Note: for <li>, we need to utlize for loop to generate 14 (<li>) items in the unordered list (<ul>) 

    for (item = 0 ; item < hours14.length ; item ++){

        const itemsli = document.createElement('li');
        itemsli.textContent= `${hours14[item]}: ${this.cookiesSales14[item]} cookies`;
        unolist.appendChild(itemsli);


    }

    // step9: We will do the same thing in step7 (c) but for the total

    const totalli = document.createElement('li');
        totalli.textContent= `Total: ${this.total} cookies`;
        unolist.appendChild(totalli);


}, 



};

seattle.getNoCookies();
seattle.beshtawi();
console.log(seattle.cookiesSales14);



// step 4: To use a method of that object to generate a random number of customers per hour.

function arbitraryNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  };
  
 

// Tokyo ##############################################################################################

// JS object Tokyo:

let tokyo = {
 name: 'Tokyo',   

 minimumCust: 3,
 
 maximumCust: 24,

 averageCust: 1.2,

total: 0,

cookiesSales14: [],


getNoCookies: function(){

   for( let item14=0 ; item14< hours14.length; item14++) {

    

    let arbitraryAvgCust = Math.ceil (arbitraryNumber(this. minimumCust, this.maximumCust)* this.averageCust);

    this.cookiesSales14.push(arbitraryAvgCust);

    this.total+= arbitraryAvgCust;

   }

},

 beshtawi: function(){

    const h2 = document.createElement('h2');
    h2.textContent= this.name;
    saleslist.appendChild(h2);


    const unolist = document.createElement('ul');
    saleslist.appendChild(unolist);


    for (item = 0 ; item < hours14.length ; item ++){

        const itemsli = document.createElement('li');
        itemsli.textContent= `${hours14[item]}: ${this.cookiesSales14[item]} cookies`;
        unolist.appendChild(itemsli);


    }


    const totalli = document.createElement('li');
        totalli.textContent= `Total: ${this.total} cookies`;
        unolist.appendChild(totalli);


}, 



};

tokyo.getNoCookies();
tokyo.beshtawi();
console.log(tokyo.cookiesSales14);



function arbitraryNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  };
  
 
// Dubai ##############################################################################################


// JS object Dubai:

let dubai = {
    name: 'Dubai',   
   
    minimumCust: 11,
    
    maximumCust: 38,
   
    averageCust: 3.7,
   
   total: 0,
   
   cookiesSales14: [],
   
   
   getNoCookies: function(){
   
      for( let item14=0 ; item14< hours14.length; item14++) {
   
       
   
       let arbitraryAvgCust = Math.ceil (arbitraryNumber(this. minimumCust, this.maximumCust)* this.averageCust);
   
       this.cookiesSales14.push(arbitraryAvgCust);
   
       this.total+= arbitraryAvgCust;
   
      }
   
   },
   
    beshtawi: function(){
   
       const h2 = document.createElement('h2');
       h2.textContent= this.name;
       saleslist.appendChild(h2);
   
   
       const unolist = document.createElement('ul');
       saleslist.appendChild(unolist);
   
   
       for (item = 0 ; item < hours14.length ; item ++){
   
           const itemsli = document.createElement('li');
           itemsli.textContent= `${hours14[item]}: ${this.cookiesSales14[item]} cookies`;
           unolist.appendChild(itemsli);
   
   
       }
   
   
       const totalli = document.createElement('li');
           totalli.textContent= `Total: ${this.total} cookies`;
           unolist.appendChild(totalli);
   
   
   }, 
   
   
   
   };
   
   dubai.getNoCookies();
   dubai.beshtawi();
   console.log(dubai.cookiesSales14);
   
   
   
   function arbitraryNumber(min, max) {
       min = Math.ceil(min);
       max = Math.floor(max);
       return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
     };


 
 // Paris ############################################################################################## 
 
 // JS object Paris:

let paris = {
    name: 'Paris',   
   
    minimumCust: 20,
    
    maximumCust: 38,
   
    averageCust: 2.3,
   
   total: 0,
   
   cookiesSales14: [],
   
   
   getNoCookies: function(){
   
      for( let item14=0 ; item14< hours14.length; item14++) {
   
       
   
       let arbitraryAvgCust = Math.ceil (arbitraryNumber(this. minimumCust, this.maximumCust)* this.averageCust);
   
       this.cookiesSales14.push(arbitraryAvgCust);
   
       this.total+= arbitraryAvgCust;
   
      }
   
   },
   
    beshtawi: function(){
   
       const h2 = document.createElement('h2');
       h2.textContent= this.name;
       saleslist.appendChild(h2);
   
   
       const unolist = document.createElement('ul');
       saleslist.appendChild(unolist);
   
   
       for (item = 0 ; item < hours14.length ; item ++){
   
           const itemsli = document.createElement('li');
           itemsli.textContent= `${hours14[item]}: ${this.cookiesSales14[item]} cookies`;
           unolist.appendChild(itemsli);
   
   
       }
   
   
       const totalli = document.createElement('li');
           totalli.textContent= `Total: ${this.total} cookies`;
           unolist.appendChild(totalli);
   
   
   }, 
   
   
   
   };
   
   paris.getNoCookies();
   paris.beshtawi();
   console.log(paris.cookiesSales14);
   
   
   
   function arbitraryNumber(min, max) {
       min = Math.ceil(min);
       max = Math.floor(max);
       return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
     };


// Lima ############################################################################################## 


 // JS object Lima:

 let lima = {
    name: 'Lima',   
   
    minimumCust: 2,
    
    maximumCust: 16,
   
    averageCust: 4.6,
   
   total: 0,
   
   cookiesSales14: [],
   
   
   getNoCookies: function(){
   
      for( let item14=0 ; item14< hours14.length; item14++) {
   
       
   
       let arbitraryAvgCust = Math.ceil (arbitraryNumber(this. minimumCust, this.maximumCust)* this.averageCust);
   
       this.cookiesSales14.push(arbitraryAvgCust);
   
       this.total+= arbitraryAvgCust;
   
      }
   
   },
   
    beshtawi: function(){
   
       const h2 = document.createElement('h2');
       h2.textContent= this.name;
       saleslist.appendChild(h2);
   
   
       const unolist = document.createElement('ul');
       saleslist.appendChild(unolist);
   
   
       for (item = 0 ; item < hours14.length ; item ++){
   
           const itemsli = document.createElement('li');
           itemsli.textContent= `${hours14[item]}: ${this.cookiesSales14[item]} cookies`;
           unolist.appendChild(itemsli);
   
   
       }
   
   
       const totalli = document.createElement('li');
           totalli.textContent= `Total: ${this.total} cookies`;
           unolist.appendChild(totalli);
   
   
   }, 
   
   
   
   };
   
   lima.getNoCookies();
   lima.beshtawi();
   console.log(lima.cookiesSales14);
   
   
   
   function arbitraryNumber(min, max) {
       min = Math.ceil(min);
       max = Math.floor(max);
       return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
     };