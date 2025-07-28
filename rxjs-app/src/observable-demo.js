var rxjs=require('rxjs');
let Observable=rxjs.Observable;

let dataStream$=new Observable(subscriber=>{
    subscriber.next("Hello");
    subscriber.next("good");
    subscriber.next("World");
    setTimeout(()=>{
        subscriber.next("I am next data"),
        subscriber.complete();
    },5000);
});

//let subscription=dataStream$.subscribe(x=>console.log(x));

//console.log("last line");

//let subscription1=dataStream$.subscribe(x=>console.log(x));

let observer={
    next:(data)=>console.log(data),
    error:(error)=>console.log(error),
    complete:()=>console.log("Completed")
}

dataStream$.subscribe(observer);