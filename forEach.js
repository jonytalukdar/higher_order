const companies = [
  { name: 'company one', category: 'Finance', start: 1981, end: 2003 },
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

companies.forEach(function (value) {
  console.log(value.name);
});

// filter

let canDrink = [];

for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
}
console.log(canDrink);

let newAges = ages.filter(function (value) {
  return value >= 21;
});
console.log(newAges);

let age = ages.filter((value) => {
  return value >= 21;
});
console.log(age);

function filtered(ages, callBack) {
  var newFilter = [];
  for (var i = 0; i < ages.length; i++) {
    if (callBack(ages[i])) {
      newFilter.push(ages[i]);
    }
  }
  return newFilter;
}

var result = filtered(ages, function (value) {
  value >= 21;
});
console.log(result);
