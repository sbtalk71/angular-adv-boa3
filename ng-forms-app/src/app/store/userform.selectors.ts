import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserFormState } from "./userform.reducers";

const userFormFeatureSelector=createFeatureSelector<UserFormState>("userForm");

export const nameSelector=createSelector(userFormFeatureSelector,state=>state.username);
export const emailSelector=createSelector(userFormFeatureSelector,state=>state.email);