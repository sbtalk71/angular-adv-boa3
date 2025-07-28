var rxjs=require('rxjs');
let BehaviorSubject=rxjs.BehaviorSubject;
let behaviorSubject=new BehaviorSubject("initial state");

behaviorSubject.subscribe(data=>console.log("Subscriber 1 ",data));

behaviorSubject.next("Updated state 1");

behaviorSubject.subscribe(data=>console.log("Subscriber 2 ",data));

behaviorSubject.next("Updated state 2");


