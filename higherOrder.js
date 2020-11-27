const companies = [
  { name: 'company one', category: 'Finance', start: 1981, end: 1987 },
  { name: 'company two', category: 'Retail', start: 1980, end: 2012 },
  { name: 'company three', category: 'Auto', start: 1989, end: 2013 },
  { name: 'company four', category: 'Retail', start: 1979, end: 2007 },
  { name: 'company five', category: 'Tech', start: 1944, end: 2002 },
  { name: 'company six', category: 'It', start: 1921, end: 2000 },
  { name: 'company seven', category: 'Fiannce', start: 1961, end: 2019 },
  { name: 'company eight', category: 'Job', start: 1950, end: 2014 },
  { name: 'company nine', category: 'Post', start: 1951, end: 2017 },
  { name: 'company ten', category: 'Drive', start: 1931, end: 2000 },
];

const ages = [12, 34, 21, 45, 67, 89, 90, 87, 65, 43, 21];
// forEach

// companies.forEach(function (value) {
//   console.log(value.name);
// });

// // filter

// let canDrink = [];

// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }
// console.log(canDrink);

// let newAges = ages.filter(function (value) {
//   return value >= 21;
// });
// console.log(newAges);

// let age = ages.filter((value) => {
//   return value >= 21;
// });
// console.log(age);

// function filtered(ages, callBack) {
//   var newFilter = [];
//   for (var i = 0; i < ages.length; i++) {
//     if (callBack(ages[i])) {
//       newFilter.push(ages[i]);
//     }
//   }
//   return newFilter;
// }

// const retailCompanies = companies.filter(function (company) {
//   if (company.category === 'Retail') {
//     return true;
//   }
// });

// const  retailCompanies = companies.filter(company => company.category == 'Retail')

// console.log(retailCompanies);

// get 80s under companies

// const under80s = companies.filter(function(company){
//   if(company.start < 1980){
//     return true
//   }
// })

// const under80s = companies.filter((company) => company.start < 1980);

// console.log(under80s);

// get companies lasted 10 years and more

// const lasted10Year = companies.filter(company => (company.end) - (company.start) > 10);
// console.log(lasted10Year);any

// map function
// create array of compavanies

// const companiesNames = companies.map(function (company) {
//   return company.name;
// });
// console.log(companiesNames);

// const testMap = companies.map(
//   (company) => `${company.name} [${company.start} - ${company.end}]`
// );

// console.log(testMap);

const agesSquare = ages.map(function (value) {
  return Math.pow(value, 2);
});
console.log(agesSquare);

function myMap(ages, callBack) {
  var newAges = [];
  for (let i = 0; i < ages.length; i++) {
    let temp = callBack(ages[i]);
    newAges.push(temp);
  }
  return newAges;
}

var newages = ages.map(function (value) {
  return Math.pow(value, 2);
});
console.log(newages);


// reduce 


