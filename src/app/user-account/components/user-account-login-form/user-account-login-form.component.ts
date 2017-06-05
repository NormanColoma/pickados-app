import { Component, Output, EventEmitter } from '@angular/core';
import { UserAccountCredentials } from "app/user-account/models/user-account-credentials.interface";

@Component({
    selector: 'user-account-login-form',
    template: `
        <form (ngSubmit)="handleLogin(form.value)" #form="ngForm" novalidate>
            <div class="form-group">
                <label for="Alias">Usuario</label>
                <input 
                    type="text" 
                    class="form-control" 
                    name="Alias" 
                    placeholder="Introduce tu nombre de usuario"
                    #username="ngModel"
                    ngModel
                    required
                >
            </div>
            <div class="form-group">
                <label for="Password">Password</label>
                <input 
                    type="password" 
                    class="form-control" 
                    name="Password" 
                    placeholder="Introduce aquí tu contraseña"
                    #pass="ngModel"
                    ngModel
                    required
                >
            </div>
            <button type="submit" class="btn btn-primary" [disabled]="form.invalid">Inciar Sesión</button>
        </form>
    `,
    styleUrls: [
        './user-account-login-form.component.css'
    ]
})

export class UserAccountLoginForm {

    @Output()
    login: EventEmitter <any> = new EventEmitter();

    handleLogin(account: UserAccountCredentials){
        this.login.emit(account);
    }
}