import { createReducer, on } from "@ngrx/store";
import { resetForm, updateEmail, updateName } from "./userform.actions";

export interface UserFormState{
    username:string;
    email:string;
}

const initialState:UserFormState={
    username:'',
    email: ''
}

export const formReducer=createReducer(
    initialState,
    on(updateName,(state,{username})=>({...state,username})),
    on(updateEmail,(state,{email})=>({...state,email})),
    on(resetForm,()=>initialState)
);