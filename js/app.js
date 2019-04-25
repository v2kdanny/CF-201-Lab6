'use-strict';
var storeCloseTime = 20;
var storeOpenHours = [];
var storeOpenTime = 6;
var hourlyCookiesFourthAndPike= [];
var totalCookiesFourthAndPike = 0;
var hourlyCookiesSeaTacAirport= [];
var totalCookiesSeaTacAirport = 0;
var hourlyCookiesSeattleCenter= [];
var totalCookiesSeattleCenter = 0;
var hourlyCookiesCapitolHill= [];
var totalCookiesCapitolHill = 0;
var hourlyCookiesAlki= [];
var totalCookiesAlki = 0;
var finalStoretime = 0;
var amPm = '';

for (storeOpenTime ; storeOpenTime <= storeCloseTime ; storeOpenTime++){
  if (storeOpenTime >= 12) {
    if (storeOpenTime > 12) {
      finalStoretime = storeOpenTime - 12 ;
    }
    else if (storeOpenTime === 12) {
      finalStoretime = storeOpenTime;
    }
    amPm = 'pm';
  }else{
    finalStoretime = storeOpenTime;
    amPm = 'am';
  }
  var timeAmPm = finalStoretime + amPm ;
  storeOpenHours.push(timeAmPm);
  console.log(timeAmPm);
}
console.log(storeOpenHours);

var fourthAndPike ={
  minHourlyCustomers:Math.ceil(Math.random())*10,
  maxHourlyCustomers:Math.ceil(Math.random())*30,
  averageCookiesPerHour:[],
  averageCustomersPerHour:[],
  averageCookiesPerCustomer:[]
};

for (var i = 0; i <= storeOpenHours.length; i++) {
  var perHourCustomers = Math.floor(Math.random() * (fourthAndPike.maxHourlyCustomers - fourthAndPike.minHourlyCustomers + 1)) + fourthAndPike.minHourlyCustomers;
  fourthAndPike.averageCustomersPerHour.push(perHourCustomers);
}
console.log(fourthAndPike.averageCustomersPerHour);
console.log(Math.random(3,13));

for (i = 0; i <= storeOpenHours.length; i++) {
  var perHourCookies = Math.ceil(fourthAndPike.averageCustomersPerHour[i] * Math.ceil(Math.floor(Math.random() * 16) + 5));
  fourthAndPike.averageCookiesPerHour.push(perHourCookies);
}
console.log(fourthAndPike.averageCookiesPerHour);

for (i = 0; i <= storeOpenHours.length; i++) {
  var perCustomerCookies = Math.ceil(fourthAndPike.averageCookiesPerHour[i] / fourthAndPike.averageCustomersPerHour[i]);
  fourthAndPike.averageCookiesPerCustomer.push(perCustomerCookies);
}
console.log(fourthAndPike.averageCookiesPerCustomer);

for (i = 0 ; i < storeOpenHours.length ; i++)
{
  var cookie = fourthAndPike.averageCookiesPerCustomer[i];
  var cookieDisplay = storeOpenHours[i] + ': ' + cookie;
  totalCookiesFourthAndPike = parseInt(cookie) + parseInt(totalCookiesFourthAndPike);
  hourlyCookiesFourthAndPike.push(cookieDisplay);
}
totalCookiesFourthAndPike = 'Total Cookies at Fourth and Pike Location: ' + totalCookiesFourthAndPike;
console.log(hourlyCookiesFourthAndPike);

var fourthAndPikeCookiesHour = document.getElementById('fourth-pike-cookies-hour');

for (i = 0; i < hourlyCookiesFourthAndPike.length; i++) {

  var liEl = document.createElement('li');

  liEl.textContent = hourlyCookiesFourthAndPike[i];

  fourthAndPikeCookiesHour.appendChild(liEl);
}

var ldEl = document.createElement('td');
ldEl.textContent = totalCookiesFourthAndPike;
fourthAndPikeCookiesHour.appendChild(ldEl);

var seaTacAirport ={
  minHourlyCustomers:Math.ceil(Math.random())*10,
  maxHourlyCustomers:Math.ceil(Math.random())*30,
  averageCookiesPerHour:[],
  averageCustomersPerHour:[],
  averageCookiesPerCustomer:[]
};

for (i = 0; i <= storeOpenHours.length; i++) {
  perHourCustomers = Math.floor(Math.random() * (seaTacAirport.maxHourlyCustomers - seaTacAirport.minHourlyCustomers + 1)) + seaTacAirport.minHourlyCustomers;
  seaTacAirport.averageCustomersPerHour.push(perHourCustomers);
}
console.log(seaTacAirport.averageCustomersPerHour);
console.log(Math.random(3,13));

for (i = 0; i <= storeOpenHours.length; i++) {
  perHourCookies = Math.ceil(seaTacAirport.averageCustomersPerHour[i] * Math.ceil(Math.floor(Math.random() * 16) + 5));
  seaTacAirport.averageCookiesPerHour.push(perHourCookies);
}
console.log(seaTacAirport.averageCookiesPerHour);

for (i = 0; i <= storeOpenHours.length; i++) {
  perCustomerCookies = Math.ceil(seaTacAirport.averageCookiesPerHour[i] / seaTacAirport.averageCustomersPerHour[i]);
  seaTacAirport.averageCookiesPerCustomer.push(perCustomerCookies);
}
console.log(seaTacAirport.averageCookiesPerCustomer);

for (i = 0 ; i < storeOpenHours.length ; i++)
{
  cookie = seaTacAirport.averageCookiesPerCustomer[i];
  cookieDisplay = storeOpenHours[i] + ': ' + cookie;
  totalCookiesSeaTacAirport = parseInt(cookie) + parseInt(totalCookiesSeaTacAirport);
  hourlyCookiesSeaTacAirport.push(cookieDisplay);
}
totalCookiesSeaTacAirport = 'Total Cookies at SeaTac Airport: ' + totalCookiesSeaTacAirport;
console.log(hourlyCookiesSeaTacAirport);

var seaTacAirportCookiesHour = document.getElementById('seatac-airport-cookies-hour');

for (i = 0; i < hourlyCookiesSeaTacAirport.length; i++) {

  liEl = document.createElement('li');

  liEl.textContent = hourlyCookiesSeaTacAirport[i];

  seaTacAirportCookiesHour.appendChild(liEl);
}

ldEl = document.createElement('td');
ldEl.textContent = totalCookiesSeaTacAirport;
seaTacAirportCookiesHour.appendChild(ldEl);

var seattleCenter ={
  minHourlyCustomers:Math.ceil(Math.random())*10,
  maxHourlyCustomers:Math.ceil(Math.random())*30,
  averageCookiesPerHour:[],
  averageCustomersPerHour:[],
  averageCookiesPerCustomer:[]
};

for (i = 0; i <= storeOpenHours.length; i++) {
  perHourCustomers = Math.floor(Math.random() * (seattleCenter.maxHourlyCustomers - seattleCenter.minHourlyCustomers + 1)) + seattleCenter.minHourlyCustomers;
  seattleCenter.averageCustomersPerHour.push(perHourCustomers);
}
console.log(seattleCenter.averageCustomersPerHour);
console.log(Math.random(3,13));

for (i = 0; i <= storeOpenHours.length; i++) {
  perHourCookies = Math.ceil(seattleCenter.averageCustomersPerHour[i] * Math.ceil(Math.floor(Math.random() * 16) + 5));
  seattleCenter.averageCookiesPerHour.push(perHourCookies);
}
console.log(seattleCenter.averageCookiesPerHour);

for (i = 0; i <= storeOpenHours.length; i++) {
  perCustomerCookies = Math.ceil(seattleCenter.averageCookiesPerHour[i] / seattleCenter.averageCustomersPerHour[i]);
  seattleCenter.averageCookiesPerCustomer.push(perCustomerCookies);
}
console.log(seattleCenter.averageCookiesPerCustomer);

for (i = 0 ; i < storeOpenHours.length ; i++)
{
  cookie = seattleCenter.averageCookiesPerCustomer[i];
  cookieDisplay = storeOpenHours[i] + ': ' + cookie;
  totalCookiesSeattleCenter = parseInt(cookie) + parseInt(totalCookiesSeattleCenter);
  hourlyCookiesSeattleCenter.push(cookieDisplay);
}
totalCookiesSeattleCenter = 'Total Cookies at Seattle Center: ' + totalCookiesSeattleCenter;
console.log(hourlyCookiesSeattleCenter);

var seattleCenterCookiesHour = document.getElementById('seattle-center-cookies-hour');

for (i = 0; i < hourlyCookiesSeattleCenter.length; i++) {

  liEl = document.createElement('li');

  liEl.textContent = hourlyCookiesSeattleCenter[i];

  seattleCenterCookiesHour.appendChild(liEl);
}

ldEl = document.createElement('td');
ldEl.textContent = totalCookiesSeattleCenter;
seattleCenterCookiesHour.appendChild(ldEl);

var capitolHill ={
  minHourlyCustomers:Math.ceil(Math.random())*10,
  maxHourlyCustomers:Math.ceil(Math.random())*30,
  averageCookiesPerHour:[],
  averageCustomersPerHour:[],
  averageCookiesPerCustomer:[]
};

for (i = 0; i <= storeOpenHours.length; i++) {
  perHourCustomers = Math.floor(Math.random() * (capitolHill.maxHourlyCustomers - capitolHill.minHourlyCustomers + 1)) + capitolHill.minHourlyCustomers;
  capitolHill.averageCustomersPerHour.push(perHourCustomers);
}
console.log(capitolHill.averageCustomersPerHour);
console.log(Math.random(3,13));

for (i = 0; i <= storeOpenHours.length; i++) {
  perHourCookies = Math.ceil(capitolHill.averageCustomersPerHour[i] * Math.ceil(Math.floor(Math.random() * 16) + 5));
  capitolHill.averageCookiesPerHour.push(perHourCookies);
}
console.log(capitolHill.averageCookiesPerHour);

for (i = 0; i <= storeOpenHours.length; i++) {
  perCustomerCookies = Math.ceil(capitolHill.averageCookiesPerHour[i] / capitolHill.averageCustomersPerHour[i]);
  capitolHill.averageCookiesPerCustomer.push(perCustomerCookies);
}
console.log(capitolHill.averageCookiesPerCustomer);

for (i = 0 ; i < storeOpenHours.length ; i++)
{
  cookie = capitolHill.averageCookiesPerCustomer[i];
  cookieDisplay = storeOpenHours[i] + ': ' + cookie;
  totalCookiesCapitolHill = parseInt(cookie) + parseInt(totalCookiesCapitolHill);
  hourlyCookiesCapitolHill.push(cookieDisplay);
}
totalCookiesCapitolHill = 'Total Cookies at Capitol Hill: ' + totalCookiesCapitolHill;
console.log(hourlyCookiesCapitolHill);

var capitolHillCookiesHour = document.getElementById('capitol-hill-cookies-hour');

for (i = 0; i < hourlyCookiesCapitolHill.length; i++) {

  liEl = document.createElement('li');

  liEl.textContent = hourlyCookiesCapitolHill[i];

  capitolHillCookiesHour.appendChild(liEl);
}

ldEl = document.createElement('td');
ldEl.textContent = totalCookiesCapitolHill;
capitolHillCookiesHour.appendChild(ldEl);

var alki ={
  minHourlyCustomers:Math.ceil(Math.random())*10,
  maxHourlyCustomers:Math.ceil(Math.random())*30,
  averageCookiesPerHour:[],
  averageCustomersPerHour:[],
  averageCookiesPerCustomer:[]
};

for (i = 0; i <= storeOpenHours.length; i++) {
  perHourCustomers = Math.floor(Math.random() * (alki.maxHourlyCustomers - alki.minHourlyCustomers + 1)) + alki.minHourlyCustomers;
  alki.averageCustomersPerHour.push(perHourCustomers);
}
console.log(alki.averageCustomersPerHour);
console.log(Math.random(3,13));

for (i = 0; i <= storeOpenHours.length; i++) {
  perHourCookies = Math.ceil(alki.averageCustomersPerHour[i] * Math.ceil(Math.floor(Math.random() * 16) + 5));
  alki.averageCookiesPerHour.push(perHourCookies);
}
console.log(alki.averageCookiesPerHour);

for (i = 0; i <= storeOpenHours.length; i++) {
  perCustomerCookies = Math.ceil(alki.averageCookiesPerHour[i] / alki.averageCustomersPerHour[i]);
  alki.averageCookiesPerCustomer.push(perCustomerCookies);
}
console.log(alki.averageCookiesPerCustomer);

for (i = 0 ; i < storeOpenHours.length ; i++)
{
  cookie = alki.averageCookiesPerCustomer[i];
  cookieDisplay = storeOpenHours[i] + ': ' + cookie;
  totalCookiesAlki = parseInt(cookie) + parseInt(totalCookiesAlki);
  hourlyCookiesAlki.push(cookieDisplay);
}
totalCookiesAlki = 'Total Cookies at Alki: ' + totalCookiesAlki;
console.log(hourlyCookiesAlki);

var alkiCookiesHour = document.getElementById('alki-cookies-hour');

for (i = 0; i < hourlyCookiesAlki.length; i++) {

  liEl = document.createElement('li');

  liEl.textContent = hourlyCookiesAlki[i];

  alkiCookiesHour.appendChild(liEl);
}

ldEl = document.createElement('td');
ldEl.textContent = totalCookiesAlki;
alkiCookiesHour.appendChild(ldEl);
