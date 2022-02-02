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
const arr1 = [1, 2, 3, [15, 20], 50];
console.log(arr1.flat());
const arr2 = [1, 2, 3, [15, 20], 50, [[[17, 66, 77]]]];
console.log(arr2.flat(2));
//map() մեթոդը յուրաքանչյուր զանգվածի տարրի համար ֆունկցիայի կանչից ստեղծում է նոր զանգված:
//map(Math.sqrt).. Math.sqrt() մեթոդը վերադարձնում է թվի քառակուսի արմատը։ 
const numbers = [4, 9, 16, 25,];
document.getElementById("sqrt").innerHTML = numbers.map(Math.sqrt);
//reduce() մեթոդը վերադարձնում է մեկ արժեք՝ ֆունկցիայի կուտակված արդյունքը:
//reduce(myFunc) մեթոդը Զանգվածի թվերը հանեք՝ սկսած ձախից.
const number = [180, 50, 30];
document.getElementById("reduc").innerHTML = number.reduce(myFunc);
function myFunc(total, num){
    return total - num;
}
//  այն բաղկացած է միայն եզակի իրերից, թե ոչ։
function unique(arr) {
    const subArr = [];
    subArr[0] = arr[0];
    for(let i=0; i<arr.length; i++){
        console.log(arr[i] + "   " + i);
        for(let p = 0; p < subArr.length; p++){
            if(subArr[p] == arr[i]){
                break;
            } else if (p == subArr.length - 1){
                subArr.push(arr[i]);
            }
        }
    }
    return subArr;
}
const strings = ["Anna", "Anna", "poxos","poxos", "poxos", "petros"];
document.getElementById("har").innerHTML = unique(strings)
// Ինչպես կարող եմ ստուգել, ​​որ տվյալ բառը մաքուր Javascript-ով իզոգրամ է՝ օգտագործելով ֆունկցիա: ֆունկցիան պետք է վերադարձնի true կամ false:
function isIsogram(word){
    x = false; y = false;
    for(i = 0; i < word.length; i++){
        
        wordl = word.substring(0,i)
        wordr = word.substring(i)
        x = wordl.includes(word.charAt(i))
        y = wordr.includes(word.charAt(i))
        document.getElementById("isogram").innerHTML = x;
        document.getElementById("isogra").innerHTML =  wordl;
        document.getElementById("isogr").innerHTML =  wordr;
        //console.log(x,wordl,wordr)
    }
    return x&&y
}
isIsogram("thomas");//False
isIsogram("moses"); //True