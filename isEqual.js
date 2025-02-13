function isPlainObject(value) {
    return typeof value === 'object'
        && value !== null
        && value.constructor === Object
        && Object.prototype.toString.call(value) === '[object Object]';
}

function isArray(value) {
    return Array.isArray(value);
}

function isArrayOrObject(value){
    return isPlainObject(value) || isArray(value);
}

function isEqual(lhs, rhs) {
    if (Object.keys(lhs).length !== Object.keys(rhs).length) {
        return false;
    }

    if (typeof rhs !== 'object' || rhs === null || Array.isArray(rhs)) {
        return false; 
    }

    for (const [key, value] of Object.entries(lhs)) {
        const rightValue = rhs[key];
        if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
            if (isEqual(value, rightValue)) {
                continue;
            }
            return false;
        }

        if (value !== rightValue) {
            return false;
        }
    }

    return true;
}

const obj1 = { 
    here: { is: "on", other: "3" }, 
    object: 5
    };
    
const obj2 = { 
    here: { is: "on", other: "2" }, 
    object: 5
    }; 

console.log(isEqual(obj1, obj2))
