/*JSON stands for JavaScript Object Notation. The JSON syntax is derived from 
JavaScript object notation syntax, but the JSON format is text or string only. 
JSON is a light weight data format for storing and transporting. JSON 
is mostly used when data is sent from a server to a client. JSON is an easier-to-use alternative to XML. */


/*Converting JSON to JavaScript Object
Mostly we fetch JSON data from HTTP response or from a file, but we can store the JSON as 
a string and we can change to Object for sake of demonstration. In JavaScript the keyword 
JSON has parse() and stringify() methods. When we want to change the JSON to an object we 
parse the JSON using JSON.parse().
 When we want to change the object to JSON we use JSON.stringify(). */

//JSON.parse(json[i, reviver])
// json or text , the data
// reviver is an optional callback function
/* JSON.parse(json, (key, value) => {

})
*/

const usersText1 = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`
    
    const usersObj1 = JSON.parse(usersText1, undefined, 1)
    console.log(usersObj1)


/*Using a reviver function with JSON.parse()
To use the reviver function as a formatter, we put the keys we want to format first name and last name value.
 Let us say, we are interested to format the firstName and lastName of the JSON data . */


 const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`
    
    const usersObj = JSON.parse(usersText, (key, value) => {
      let newValue =
        typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
      return newValue
    })
    console.log(usersObj)

