//Regular Expressions
/*Biểu thức thông thường hoặc RegEXP là một ngôn ngữ lập trình nhỏ giúp tìm mẫu trong dữ liệu. 
Một regexp có thể được sử dụng để kiểm tra xem một số mẫu có tồn tại trong một loại dữ liệu khác không.
 Để sử dụng RegEXP trong JavaScript, chúng tôi sử dụng Trình xây dựng RegEXP hoặc chúng tôi có thể khai 
 báo mẫu RegEXP bằng cách sử dụng hai dấu gạch chéo về phía trước theo sau là một lá cờ. 
 Chúng ta có thể tạo ra một mô hình theo hai cách. Để khai báo một chuỗi, chúng tôi sử 
 dụng một trích dẫn duy nhất, trích dẫn gấp đôi một backtick để khai báo một biểu thức thông thường,
  chúng tôi sử dụng hai dấu 
gạch chéo về phía trước và một lá cờ tùy chọn. Cờ có thể là g, i, m, s, u hoặc y. */
//RegExp parameters
//A regular expression takes two parameters. One required search pattern and an optional flag.


//Pattern
/*A pattern could be a text or any form of pattern which some sort of similarity.
 For instance the word spam in an email could be a pattern we are 
interested to look for in an email or a phone number format 
number might be our interest to look for. */

//Flags

/*Flags are optional parameters in a regular expression which determine the type of searching. Let us see some of the flags:

g: a global flag which means looking for a pattern in whole text
i: case insensitive flag(it searches for both lowercase and uppercase)
m: multiline */


let pattern1 = 'love'
let flag = 'gi'
let regEx = new RegExp(pattern1, flag)
console.log(regEx);

//Array containing all of the match
/*match():Returns an array containing all of the matches, including capturing groups,
 or null if no match is found.
 If we do not use a global flag, match() returns an array containing the pattern, index, input and group. */
 const str = 'I Love JavaScript'
const pattern = /love/i
const result = str.match(pattern)
console.log(result)

//search(): Tests for a match in a string. It returns the index of the match, or -1 if the search fails.
const str1 = 'I love JavaScript'
const pattern12 = /love/g
const result1 = str1.search(pattern12)
console.log(result1)

/*Replacing a substring
replace(): Executes a search for a match in a string, 
and replaces the matched substring with a replacement substring. */
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/, 'JavaScript')
console.log(matchReplaced)