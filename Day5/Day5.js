const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  //1 Declare an empty array;
  const arr = [];
  //2 Declare an array with more than 5 number of elements  
  const arr2 = [1,2,3,4,5,13];
  console.log(arr2);
  //3 Find the length of your array
  console.log(arr2.length);
  //4 Get the first item, the middle item and the last item of the array
  console.log("the first",arr2[0]);
  console.log("mid",arr2[(arr2.length-1)/2]);
  console.log("bottom",arr2[arr2.length-1]);
  //5 Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
  const mixedDataTypes = [5,5.6,"abc",true,
  { country: 'Finland', city: 'Helsinki' },
  { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }];
  console.log(mixedDataTypes.length);
  //6 Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
  const social = ["fb","zalo","tiweer","shoppe","amazon"];
  //7 Print the array using console.log()
  console.log(social);

  //lv2 First remove all the punctuations and change the string to array and count the number of words in the array

  let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
  const text3 = text.split();
  const text1 = text3.join(' #');
  const text2 = text1.split();
  console.log(text2);