var a = [2,34,4,6,73,5]
a.map((data)=>{console.log(data)})

var a = [2,4,4,5,5,5,6,7,7]
a.map((data)=>{return data})
(9) [2, 4, 4, 5, 5, 5, 6, 7, 7]

var a = [2,4,4,5,5,5,6,7,7]
a.map((data)=>{return data*2})
[4, 8, 8, 10, 10, 10, 12, 14, 14]

->map is use to iterate over the Array
->it always return same length of output as input Array
->it is use to applay logics (sum,mul,div) or return html, bind data

var a = [2,4,4,5,5,5,6,7,7]
a.map((data)=>{return `<p>${data*2}</p>`})
(9) ['<p>4</p>', '<p>8</p>', '<p>8</p>', '<p>10</p>', '<p>10</p>', '<p>10</p>', '<p>12</p>', '<p>14</p>', '<p>14</p>']

filter:
var a = [12,1,34,6,56,23,3,7,2,8,9,56,23]
a.filter((data) => {return data>10})
(6) [12, 34, 56, 23, 56, 23]

var a = [12,1,34,6,56,23,3,7,2,8,9,56,23]
a.filter((data) => {return data<10})
[1, 6, 3, 7, 2, 8, 9]
->it is use to filter out the value
->it may or may not return same length of input Array
->it only return those value for which condition / output is true.

var a = [12,1,34,6,56,23,3,7,2,8,9,56,23]
a.map((data) => {return data<10})
(13) [false, true, false, true, false, false, true, true, true, true, true, false, false]

var a= [0,1,2,3]
a.map((data)=>{return data*2})
a.filter((data)=>{return data*2})
