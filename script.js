// concat Մեթոդ է որը միացնում է զանգվածները
const myGirls = ["Ani", "Sona"];
const myBoys = ["Poxos", "Petros"];
const myChildren = myGirls.concat(myBoys);
document.getElementById("concat").innerHTML = myChildren
//fill-ը մեթոդ է որը լրացնում է արժեքները, fill("Helo", սկիզբ, վերջ)
const frutis = ["Banana", "Orange", "Mango", "Aple"]
document.getElementById("fill").innerHTML = frutis.fill("Helo")
document.getElementById("fil").innerHTML = frutis.fill("hi",0,2)
//find-ը մեթոդը վերադարձնում է զանգվածի առաջին տարրի արժեքը, որը անցնում է թեստ 
const ab = [3, 10, 15, 18, 20, 22];
function checkAge(abe){
    return abe > 18;
}
document.getElementById("find").innerHTML = ab.find(checkAge);
//flat-ը մեթոդը
const arr1 = [1, 2, 3, [15, 20], 50]
console.log(arr1.flat())
const arr2 = [1, 2, 3, [15, 20], 50, [[[17, 66, 77]]]]
console.log(arr2.flat(2))