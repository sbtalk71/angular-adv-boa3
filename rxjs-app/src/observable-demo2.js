var rxjs=require('rxjs');
let of=rxjs.of;
let filter=rxjs.filter;
let map=rxjs.map;

let dataStream$=of("shantanu","pavan","kishore","rahul","palak","shanker");
dataStream$.pipe(filter(name=>name.length>5),map(name=>name+" Welcome to RxJS")).subscribe(msg=>console.log(msg))