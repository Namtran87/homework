let num1 = [1,2,3,4,5,6];
let num2 = num1.map(function(x){
return x*x});
console.log(num2)
let names = [
    'nam',
    'lan',
    'tung',
    'hai',
    'luan',
    'tung',
    'nam'
];
console.log(names.filter(function(name){
return name == 'nam'
}));