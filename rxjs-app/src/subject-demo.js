var rxjs=require('rxjs');
let Subject=rxjs.Subject;
let subject=new Subject();

subject.subscribe(data=>console.log("subscriber 1 "+data));
subject.subscribe(data=>console.log("subscriber 2 "+data));

subject.next("hello");
subject.next("world");

subject.subscribe(data=>console.log("subscriber 3 "+data));

subject.next("welcome to rxjs");