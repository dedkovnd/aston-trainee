//#5
let str = 'string';

let num = 12;

let isTrue = true;

let anyValue = null;

let anyVar;

const newSymbol = Symbol('string')

const bigInt = 9997000254740991n;
const alsoBigInt = BigInt("1234567890123456789012345678901234567890")

//#6
console.log( "B" + "a" + (1 - "hello")); //'Banan'
console.log((true && 3) + "d"); //'3d'
console.log(Boolean(true && 3) + "d"); //'trued'
console.log(NaN + 1) //NaN
console.log(NaN + 'o') //'NaNo'
console.log(undefined + 1) //NaN
console.log(undefined - 1) //NaN
console.log(null + 1) //1
console.log(null / 5) //0
console.log(5 / undefined) //NaN
console.log(-5 / null) //-Infinity
console.log(null == 0) //false
console.log(null == '') //false
console.log(null > 0) //false
console.log(null >= 0) //true
console.log(null == '') //false
console.log('foo' + + 'bar') //'fooNaN'
console.log('11' + '1' - 1) //110
console.log(typeof Object) //function
console.log(typeof Math) //object
console.log(new String('foo')=='foo') //true
console.log(new String('foo')==='foo') //false
