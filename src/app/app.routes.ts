import { Routes } from '@angular/router';
import { Public } from './layout/public/public';
import { Index } from './pages/public/index';

export const routes: Routes = [
    {
        path:'',
        component:Public,
        children: [
            {path: 'index',component:Index},
            {path:'',redirectTo:'index',pathMatch:'full'}
        ]
    }
];
