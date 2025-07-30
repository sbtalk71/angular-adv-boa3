import { CanDeactivateFn } from '@angular/router';
import { EditUserComponent } from './pages/edit-user/edit-user.component';

export const editGuard: CanDeactivateFn<EditUserComponent> = (component:EditUserComponent, currentRoute, currentState, nextState) => {
  return component.canExit();
};
