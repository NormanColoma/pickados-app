import { Component } from '@angular/core';

@Component({
    selector: 'user-account-register-viewer',
    template: `
      <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Pickados</a></li>
            <li class="breadcrumb-item active">Registrarse</li>
        </ol>
        <div id="registerContainer" class="d-md-flex flex-column align-items-center">
            <div class="card col-md-4">
                <h3 class="card-header display-4">Registrar Cuenta</h3>
                <div class="card-block">
                    
                    <div class="d-md-flex flex-column align-items-end">
                        <p class="card-text">
                            <small>¿Ya tienes una cuenta?
                                <a routerLink="/account/login" routerLinkActive="active" class="text-primary">Accede</a>
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `
})

export class UserAccountRegisterViewer{}