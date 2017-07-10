import { Component } from '@angular/core';

@Component({
    selector: 'user-account-login-form',
    template: `
         <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Pickados</a></li>
            <li class="breadcrumb-item active">Iniciar Sesión</li>
        </ol>
        <div id="loginContainer" class="d-md-flex flex-column align-items-center">
            <div class="card col-md-4">
                <h3 class="card-header display-4">Iniciar Sesión</h3>
                <div class="card-block">
                    <form>
                        <div class="form-group">
                            <label for="userName">Usuario</label>
                            <input type="text" class="form-control" id="userName" placeholder="Introduce tu nombre de usuario">
                        </div>
                        <div class="form-group">
                            <label for="pass">Password</label>
                            <input type="password" class="form-control" id="pass" placeholder="Introduce aquí tu contraseña">
                        </div>
                        <button type="submit" class="btn btn-primary">Inciar Sesión</button>
                    </form>
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
    `,
    styleUrls: [
        './user-account-login-form.component.css'
    ]
})

export class UserAccountLoginForm {}