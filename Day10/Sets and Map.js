//Sets and Maps
//set là một tập hợp các yếu tố. set chỉ có thể chứa các yếu tố duy nhất.
//Creating an empty set
const companies = new Set();
console.log(companies);

//Creating set from array
const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ];
  
  const setOfLanguages = new Set(languages);
  console.log(setOfLanguages);

//Set là một đối tượng có thể lặp lại và chúng ta có thể lặp lại thông qua từng yếu tố.

for (const language of setOfLanguages) {
    console.log(language)
  }

//Adding an element to a set
const companies1 = new Set() // creating an empty set
console.log(companies1.size) // 0

companies1.add('Google') // add element to the set
companies1.add('Facebook')
companies1.add('Amazon')
companies1.add('Oracle')
companies1.add('Microsoft')
console.log(companies1.size) // 5 elements in the set
console.log(companies1)

//Deleting an element a set
console.log('xoa',companies1.delete('Google'))
console.log(companies1.size) // 4 elements left in the set

//Checking an element in the set
//The has method can help to know if a certain element exists in a set.
console.log(companies1.has('Apple')) // false
console.log(companies1.has('Facebook')) // true

//Clearing the set
//It removes all the elements from a set.
companies.clear()
console.log(companies)


const langSet = new Set(languages)
console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
console.log(langSet.size) // 4

const counts = []
const count = {}

for (const c of langSet) {
  const filteredLang = languages.filter((lng) => lng === c)
  console.log(filteredLang) // ["English", "English", "English"]
  counts.push({ lang: c, count: filteredLang.length })
}
console.log(counts)
//difference of sets
let a = [1, 2, 3, 4, 5, 7 , 8 , 9 ]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => !B.has(num))
let C = new Set(c)

console.log(C)
//Creating an empty Map
const map = new Map();
console.log(map);

//Creating an Map from array
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ];
const map1 = new Map(countries);
console.log(map1);
console.log(map1.size);

//Adding values to the Map
const countriesMap = new Map();
console.log(countriesMap.size) ;// 0
countriesMap.set('Finland', 'Helsinki');
countriesMap.set('Sweden', 'Stockholm');
countriesMap.set('Norway', 'Oslo');
console.log(countriesMap);
console.log(countriesMap.size);

//Getting a value from Map
console.log(countriesMap.get('Finland'));

//Checking key in Map
console.log(countriesMap.has('Finland'));

//Getting all values from map using loop
for (const country of countriesMap) {
    console.log(country)
};
for (const [country, city] of countriesMap){
    console.log(country, city)
};





//Exercises:Level 1

const Countries = ['Finland', 'Sweden', 'Norway'];

//1.create an empty set
const country = new Set(Countries);
console.log(country);

//2.Create a set containing 0 to 10 using loop

const Counts = new Set();
for(var i=0;i<=10;i++){
  Counts.add(i);
}
console.log(Counts);

//3.Remove an element from a set
console.log('delete:',country.delete('Norway'));

//4.Clear a set
country.clear();
console.log('clear:',country);
//5.Create a set of 5 string elements from array

const juice = [
  'orange',
  'banana',
  'mango',
  'lime',
  'coconut'
];
const comboJuice = new Set(juice);
console.log('Juice:',comboJuice);

//6.Create a map of countries and number of characters of a country
const mapCountries = [
  ["Da Nang", 43],
  ["Hai Phong", 27],
  ["Quang Tri", 74],
  ["Ha Tinh", 21],
  ["Nghe An", 37]
];

const mapVietNam = new Map(mapCountries);
console.log(mapVietNam);

//Exercises:Level 2

const x = [4, 5, 8, 9];
const y = [ 3,4, 5, 7];
const z = [...x,...y];
//1.Find x union y
const X= new Set(x);
const Y = new Set(y);
const Z = new Set(z);
console.log('Union x & y:',Z);

//2.Find x intersection y
const check = x.filter((num)=> Y.has(num));
console.log(check);


//Exercises:Level 3
const CountriesInTheWorld = [
  {languages:"English", popular:99},
  {languages:"VietNam",popular:99},
  {languages:"Phap",popular:94},
  {languages:"My",popular:12},
  {languages:"Trung Quoc",popular:23},
  {languages:"Nhat Ban",popular:34},
  {languages:"Nhat Ban1",popular:34},
  {languages:"Nhat Ban2",popular:34},
  {languages:"Nhat Ban3",popular:34},
  {languages:"Nhat Ban4",popular:34},
  {languages:"Nhat Ban5",popular:34},
  {languages:"Nhat Ban6",popular:34},
  {languages:"Nhat Ban7",popular:34},
  {languages:"Nhat Ban8",popular:34},
  {languages:"Nhat Ban9",popular:34},

  
];
//1.How many languages are there in the countries object file.
const numberCountry = new Set(CountriesInTheWorld);
console.log(numberCountry.size);



//2.Use the countries data to find the 10 most spoken languages:
function mostSpokenLanguages(countries, number) {
  // Object.fromEntries([
    const result=Object.entries(countries).sort((a, b) => b[1].popular - a[1].popular);
    
      const totalResult = Object.entries(result).forEach(([key,value])=>{
            if(key <= number-1){
      
              console.log(Object.values(value)[1]);
            }
      });
    return totalResult;
};
console.log(mostSpokenLanguages(CountriesInTheWorld,10));

