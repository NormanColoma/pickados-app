import { Component } from '@angular/core';

@Component({
    selector: 'user-account-login-viewer',
    styleUrls: ['./user-account-login-viewer.component.css'],
    template: `
         <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Pickados</a></li>
            <li class="breadcrumb-item active">Iniciar Sesión</li>
        </ol>
        <div id="loginContainer" class="d-md-flex flex-column align-items-center">
            <div class="card col-md-4">
                <h3 class="card-header display-4">Iniciar Sesión</h3>
                <div class="card-block">
                   <user-account-login-form
                    (login)="onLoginAccount($event)"
                   >
                   </user-account-login-form>
                    <div class="d-md-flex flex-column align-items-end">
                        <p class="card-text">
                            <small>¿No tienes una cuenta?
                                <a routerLink="/register" routerLinkActive="active" class="text-primary">Regístrate</a>
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    `
})

export class UserAccountLoginViewer{

    onLoginAccount(event){
        console.log(event);
    }
}