import { createAction, props } from "@ngrx/store";

export const updateName = createAction(
    '[user form] update username',
    props<{ username: string }>()
);

export const updateEmail = createAction(
    '[user form] update email',
    props<{ email: string }>()
);

export const resetForm = createAction(
    '[user form] reset form'
);