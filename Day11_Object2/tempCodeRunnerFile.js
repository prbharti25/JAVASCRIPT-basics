let arrX=[1,2,3,4,5,6];
console.log(arrX.__proto__==Array.prototype);
console.log(arrX.__proto__.__proto__==Array.prototype.__proto__);
console.log(arrX.__proto__.__proto__==Object.prototype);
console.log(arrX.__proto__.__proto__.__proto__==null);
console.log(arrX.__proto__.__proto__.__proto__==Object.prototype.prototype);