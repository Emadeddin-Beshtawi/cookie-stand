
'use strict';

let hours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'];

let seattle = {

  name: 'seattle',

minimumPerClients: 23,

maximumPerClients: 65,

averagePerClients: 6.3,

    randomClients: function () {
        return Math.floor(Math.random() * (this.maximumPerClients - this.minimumPerClients + 1)) + this.minimumPerClients;
    },

    clientsPerHour: function ()
     {
        let clientsPerHour = [];

        for (let i = 0; i < hours.length; i++) {
            clientsPerHour.push(this.randomClients());
        }
        return clientsPerHour;
    },

  averagePerHour: function () {
        let averagePerHour = [];
        let clientsPerHour = this.clientsPerHour();

  for (let i = 0; i < clientsPerHour.length; i++)
         {
            averagePerHour.push(Math.floor(this.averagePerClients * clientsPerHour[i]));
        }
        return averagePerHour;
    },

    totals: function ()
     {
        let averagePerHour= this.averagePerHour();
        let total = 0;
        for (let i = 0; i < averagePerHour.length; i++) {
            total = total + averagePerHour[i];
        }
        return total;
    },
};
// console.log(seattle.custPerHour());
seattle.averagePerHour();

seattle.totals();

seattle.clientsPerHour();

let seattleParent = document.getElementById('parent');

let seattleArticleElement = document.createElement('article');

seattleParent.appendChild(seattleArticleElement);

let Seattleh2Element = document.createElement('h2');

seattleArticleElement.appendChild(Seattleh2Element);

Seattleh2Element.textContent = seattle.name;

let seattleulElement = document.createElement('ul');

seattleArticleElement.appendChild(seattleulElement);

for (let i = 0; i < hours.length; i++)

 {
    let seattleliElement = document.createElement('li');

    seattleulElement.appendChild(seattleliElement);

    seattleliElement.textContent = `${hours[i]} : ${seattle.averagePerHour()[i]} cookies`;
}
let SliTotalElement = document.createElement('li');
seattleulElement.appendChild(SliTotalElement);
SliTotalElement.textContent = `Total : ${seattle.totals()} cookies`;


//The SC tokyo

let tokyo = {

  name: 'tokyo',

minimumPerClients: 3,

maximumPerClients: 24,

averagePerClients: 1.2,

randomClients: function () {
        return Math.floor(Math.random() * (this.maximumPerClients - this.minimumPerClients + 1)) + this.minimumPerClients;
    },

    clientsPerHour: function ()
     {
        let clientsPerHour = [];

        for (let i = 0; i < hours.length; i++) {
            clientsPerHour.push(this.randomClients());
        }
        return clientsPerHour;
    },

  averagePerHour: function () {
        let averagePerHour = [];
        let clientsPerHour = this.clientsPerHour();

  for (let i = 0; i < clientsPerHour.length; i++)
         {
            averagePerHour.push(Math.floor(this.averagePerClients * clientsPerHour[i]));
        }
        return averagePerHour;
    },

    totals: function () {
        let averagePerHour= this.averagePerHour();
        let total = 0;
        for (let i = 0; i < averagePerHour.length; i++) {
            total = total + averagePerHour[i];
        }
        return total;
    },
};
// tokyo console
tokyo.averagePerHour();

tokyo.totals();

tokyo.clientsPerHour();

let tokyoParent = document.getElementById('parent');

let tokyoArticleElement = document.createElement('article');

tokyoParent.appendChild(tokyoArticleElement);

let tokyoh2Element = document.createElement('h2');

tokyoArticleElement.appendChild(tokyoh2Element);

tokyoh2Element.textContent = tokyo.name;

let tokyoulElement = document.createElement('ul');

tokyoArticleElement.appendChild(tokyoulElement);

for (let i = 0; i < hours.length; i++)

 {
    let tokyoliElement = document.createElement('li');

    tokyoulElement.appendChild(tokyoliElement);

    tokyoliElement.textContent = `${hours[i]} : ${tokyo.averagePerHour()[i]} cookies`;
}
let tokyoTotalElement = document.createElement('li');
tokyoulElement.appendChild(tokyoTotalElement);
tokyoTotalElement.textContent = `Total : ${tokyo.totals()} cookies`;


// The THC dubai



let dubai = {

  name: 'dubai',

minimumPerClients: 11,

maximumPerClients: 38,

averagePerClients: 3.7,

    randomClients: function () {
        return Math.floor(Math.random() * (this.maximumPerClients - this.minimumPerClients + 1)) + this.minimumPerClients;
    },

    clientsPerHour: function ()
     {
        let clientsPerHour = [];

        for (let i = 0; i < hours.length; i++) {
            clientsPerHour.push(this.randomClients());
        }
        return clientsPerHour;
    },

  averagePerHour: function () {
        let averagePerHour = [];
        let clientsPerHour = this.clientsPerHour();

  for (let i = 0; i < clientsPerHour.length; i++)
         {
            averagePerHour.push(Math.floor(this.averagePerClients * clientsPerHour[i]));
        }
        return averagePerHour;
    },

    totals: function () {
        let averagePerHour= this.averagePerHour();
        let total = 0;
        for (let i = 0; i < averagePerHour.length; i++) {
            total = total + averagePerHour[i];
        }
        return total;
    },
};

// dubai console

dubai.averagePerHour();

dubai.totals();

dubai.clientsPerHour();

let dubaiParent = document.getElementById('parent');

let dubaiArticleElement = document.createElement('article');

dubaiParent.appendChild(dubaiArticleElement);

let dubaih2Element = document.createElement('h2');

dubaiArticleElement.appendChild(dubaih2Element);

dubaih2Element.textContent = dubai.name;

let dubaiulElement = document.createElement('ul');

dubaiArticleElement.appendChild(dubaiulElement);

for (let i = 0; i < hours.length; i++)

 {
    let dubailiElement = document.createElement('li');

    dubaiulElement.appendChild(dubailiElement);

    dubailiElement.textContent = `${hours[i]} : ${dubai.averagePerHour()[i]} cookies`;
}
let dubaiTotalElement = document.createElement('li');

dubaiulElement.appendChild(dubaiTotalElement);

dubaiTotalElement.textContent = `Total : ${dubai.totals()} cookies`;



// Forth city Paris

let paris = {

  name: 'paris',

minimumPerClients: 20,

maximumPerClients: 38,

averagePerClients: 2.3,

    randomClients: function () {
        return Math.floor(Math.random() * (this.maximumPerClients - this.minimumPerClients + 1)) + this.minimumPerClients;
    },

    clientsPerHour: function ()
     {
        let clientsPerHour = [];

        for (let i = 0; i < hours.length; i++) {
            clientsPerHour.push(this.randomClients());
        }
        return clientsPerHour;
    },

  averagePerHour: function () {
        let averagePerHour = [];
        let clientsPerHour = this.clientsPerHour();

  for (let i = 0; i < clientsPerHour.length; i++)
         {
            averagePerHour.push(Math.floor(this.averagePerClients * clientsPerHour[i]));
        }
        return averagePerHour;
    },

    totals: function () {
        let averagePerHour= this.averagePerHour();
        let total = 0;
        for (let i = 0; i < averagePerHour.length; i++) {
            total = total + averagePerHour[i];
        }
        return total;
    },
};
// paris console
paris.averagePerHour();

paris.totals();

paris.clientsPerHour();

let parisParent = document.getElementById('parent');

let parisArticleElement = document.createElement('article');

parisParent.appendChild(parisArticleElement);

let parish2Element = document.createElement('h2');

parisArticleElement.appendChild(parish2Element);

parish2Element.textContent = paris.name;

let parisulElement = document.createElement('ul');

parisArticleElement.appendChild(parisulElement);

for (let i = 0; i < hours.length; i++)

 {
    let parisliElement = document.createElement('li');

    parisulElement.appendChild(parisliElement);

    parisliElement.textContent = `${hours[i]} : ${paris.averagePerHour()[i]} cookies`;
}
let parisTotalElement = document.createElement('li');

parisulElement.appendChild(parisTotalElement);

parisTotalElement.textContent = `Total : ${paris.totals()} cookies`;



// The fifth city

let lima = {

  name: 'lima',

minimumPerClients: 2,

maximumPerClients: 16,

averagePerClients: 4.6,

    randomClients: function () {
        return Math.floor(Math.random() * (this.maximumPerClients - this.minimumPerClients + 1)) + this.minimumPerClients;
    },

    clientsPerHour: function ()
     {
        let clientsPerHour = [];

        for (let i = 0; i < hours.length; i++) {
            clientsPerHour.push(this.randomClients());
        }
        return clientsPerHour;
    },

  averagePerHour: function () {
        let averagePerHour = [];
        let clientsPerHour = this.clientsPerHour();

  for (let i = 0; i < clientsPerHour.length; i++)
         {
            averagePerHour.push(Math.floor(this.averagePerClients * clientsPerHour[i]));
        }
        return averagePerHour;
    },

    totals: function () {
        let averagePerHour= this.averagePerHour();
        let total = 0;
        for (let i = 0; i < averagePerHour.length; i++) {
            total = total + averagePerHour[i];
        }
        return total;
    },
};
// lima console
lima.averagePerHour();

lima.totals();

lima.clientsPerHour();

let limaParent = document.getElementById('parent');

let limaArticleElement = document.createElement('article');

limaParent.appendChild(limaArticleElement);

let limah2Element = document.createElement('h2');

limaArticleElement.appendChild(limah2Element);

limah2Element.textContent = lima.name;

let limaulElement = document.createElement('ul');

limaArticleElement.appendChild(limaulElement);

for (let i = 0; i < hours.length; i++)

 {
    let limaliElement = document.createElement('li');

    limaulElement.appendChild(limaliElement);

    limaliElement.textContent = `${hours[i]} : ${lima.averagePerHour()[i]} cookies`;
}
let limaTotalElement = document.createElement('li');

limaulElement.appendChild(limaTotalElement);

limaTotalElement.textContent = `Total : ${lima.totals()} cookies`;



