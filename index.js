//#1
const innerObject = {};
const middleArray = [1,2,3,innerObject ];

const workingObjectLitral = {
    a: middleArray 
 };

const workingObjectConstructor = new Object();
workingObjectConstructor.a = middleArray;

const workingObjectAssign = Object.assign({}, { a: middleArray })

const workingObjectCreate = Object.create(null);
workingObjectCreate.a = middleArray
//#2
const workingObject = {
    a: middleArray 
 };

const copy1 = Object.assign({}, workingObject);

const copy2 = { ...workingObject };

const copy3 = JSON.parse(JSON.stringify(workingObject));
//#3
function makeCounter() {
    let count = 0;
    return function() {
        count++;
    }
};

const makeCounter = () => {
    let count = 0;
    return () => count++;
};

const makeCounter = (function() {
    let count = 0;
    return function() {
        return count++; 
    };
})();
//доп №1 см. файл isEqual

//доп №2
function reverseStr(str) {
    return str.split('').reverse().join('');
}
