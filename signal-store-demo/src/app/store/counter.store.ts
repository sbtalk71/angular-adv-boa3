import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";

interface CounterState{
    counter:number;
}

const initialState:CounterState={
    counter:0
}

export const counterStore=signalStore(
    {
        providedIn:'root'
    },
    withState(initialState),
    withMethods((store)=>({
        increment(){
            patchState(store,{counter:store.counter()+1})
        },
        decrement(){
            patchState(store,{counter:store.counter()-1})
        },
        reset(){
            patchState(store,{counter:0})
        }
    }))

);