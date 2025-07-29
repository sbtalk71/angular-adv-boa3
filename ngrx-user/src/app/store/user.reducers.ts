import { createReducer, on } from "@ngrx/store";
import { User } from "../user";
import { addUser, removeUser } from "./user.actions";

export interface UserState{
    users:User[]
}

const initialState:UserState={
    users:[]
}

export const userReducer=createReducer(
    initialState,
    on(addUser,(state,user)=>({...state,users:[...state.users,user]})),
    on(removeUser,(state,{id})=>({...state,users:state.users.filter(user=>user.id!==id)}))

);

