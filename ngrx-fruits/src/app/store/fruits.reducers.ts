import { createReducer, on } from "@ngrx/store"
import { addFruit, clearFruits, removeFruit } from "./fruits.actions";

export interface AppState{
	fruits:string[]
}

const initialState:AppState={
    fruits:[]
}

export const fruitsReducer=createReducer(
initialState,
on(addFruit,(state,{fruit})=>({...state,fruits:[...state.fruits,fruit]})),
on(removeFruit,(state,{fruit})=>({...state,fruits:state.fruits.filter(f=>f!==fruit)})),
on(clearFruits,state=>({...state,fruits:[]}))
);