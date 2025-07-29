import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.reducers";

const userStateFeatureSelector=createFeatureSelector<UserState>("userState");

export const usersArraySelector=createSelector(userStateFeatureSelector,state=>state.users)