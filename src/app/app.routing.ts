import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './componentes/login/login.component';
import { RecuperarContrasenaComponent } from './componentes/recuperar-contrasena/recuperar-contrasena.component';


const app_routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'recuperar-contrasena', component: RecuperarContrasenaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
]

export const app_routing = RouterModule.forRoot(app_routes);