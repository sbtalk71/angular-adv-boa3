import { createAction,props } from "@ngrx/store";
import { User } from "../user";

export const addUser=createAction(
    "[user] add user",
    props<User>()
);

export const removeUser=createAction(
     "[user] remove user",
     props<{id:number}>()
);