import { Routes } from '@angular/router';
import { Public } from './layout/public/public';
import { Index } from './pages/public/index';
import { Nosotros } from './pages/public/nosotros/nosotros';
import { Teleconsultas } from './pages/public/teleconsultas/teleconsultas';
import { Especialidades } from './pages/public/especialidades/especialidades';
import { IniciarSesion } from './pages/public/usuario/iniciar-sesion/iniciar-sesion';
import { Registrarme } from './pages/public/usuario/registrarme/registrarme';

export const routes: Routes = [
    {
        path:'',
        component:Public,
        children: [
            {path: 'index',component:Index},
            {path: 'nosotros',component:Nosotros},
            {path: 'teleconsultas',component:Teleconsultas},
            {path: 'especialidades',component:Especialidades},
            {path:'',redirectTo:'index',pathMatch:'full'}
        ]
    },
    {path:'usuario/iniciar-sesion',component:IniciarSesion},
    {path:'usuario/registrarme',component:Registrarme}
];
