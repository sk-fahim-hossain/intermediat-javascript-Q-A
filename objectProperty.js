const students = [
    {id:21, name :'shuvo'},
    {id:233, name: 'bodrul'},
    {id:28, name :'joshim'},
    {id:18, name :'montu'},
];
const names = students.map(s=>s.name);
console.log(names);
const ids = students.map(s=>s.id);
console.log(ids);
const bigger = students.filter(s=>s.id>100);
console.log(bigger);
const best = students.find(s=>s.id<20);
console.log(best);