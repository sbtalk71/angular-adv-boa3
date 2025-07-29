import { createAction, props } from "@ngrx/store";

export const addFruit=createAction(
    "[fruits] add fruit",
    props<{fruit:string}>()
)

export const removeFruit=createAction(
    "[fruits] remove fruit",
    props<{fruit:string}>()
)
export const clearFruits=createAction(
    "[fruits] clear"
)