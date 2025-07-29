import { createFeatureSelector, createReducer,createSelector,on } from "@ngrx/store";
import { decrement, decrementDouble, increment, incrementDouble, reset, resetDouble } from "./counter.actions";

let initialState=0;

export const counterReducer=createReducer(
initialState,
on(increment,state=>state+1),
on(decrement,state=>state-1),
on(reset,state=>0)
);

//code for IncrementDouble
export interface DoubleCounter{
    counter:number
}

const doubleInitialState:DoubleCounter={
    counter:0
}

export const doubleReducer=createReducer(
    doubleInitialState,
    on(incrementDouble,state=>({...state,counter:state.counter+2})),
    on(decrementDouble,state=>({...state,counter:state.counter-2})),
    on(resetDouble,state=>({...state,counter:0})),
);

const doubleCounterFeatureSelector=createFeatureSelector<DoubleCounter>('doubleCounter');
export const doubleDataSelector=createSelector(doubleCounterFeatureSelector,state=>state.counter);
