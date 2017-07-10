import { Component } from '@angular/core';
import { UserAccountCredentials } from "app/user-account/models/user-account-credentials.interface";
import { UserAccountService } from "app/user-account/user-account.service";
import { UserAccount } from "app/user-account/models/user-account.interface";

import 'rxjs/add/operator/catch';

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
                                <a routerLink="/account/register" routerLinkActive="active" class="text-primary">Regístrate</a>
                            </small>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 error-container" *ngIf="wrongCredentials">
                <div class="alert alert-danger" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <strong>No se pudo autenticar.</strong> El usuario o la contraseña no son correctos.
                </div>
            </div>
            <div class="col-md-4 error-container" *ngIf="error">
                <div class="alert alert-danger" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <strong>Fallo en el servidor.</strong> Se produjo un fallo en el servidor, inténtelo de nuevo.
                </div>
            </div>
        </div>
    `
})

export class UserAccountLoginViewer{

    private error = false;
    private wrongCredentials = false;
    constructor(private userAccountService: UserAccountService){}

    onLoginAccount(event : UserAccountCredentials){
        this.wrongCredentials = false;
        this.error = false;
        this.userAccountService
        .login(event)
        .subscribe((data: boolean) => {
            debugger;
            if (data) {
                this.userAccountService.redirectAfterLogin();
            } else {
                this.wrongCredentials = true;
            }
        }, error => this.showErrorMessage());
    }

    showErrorMessage() {
        this.error = true;
    }
}