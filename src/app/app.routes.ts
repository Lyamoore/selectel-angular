import { Routes } from '@angular/router';
import { Welcome } from './components/welcome/welcome';
import { ListSelection } from './components/list-selection/list-selection';

export const routes: Routes = [
  { path: "", component: Welcome },
  { path: "list", component: ListSelection }
];
