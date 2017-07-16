import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";
import { UserAccountLoginViewer } from "app/user-account/containers/user-account-login-viewer/user-account-login-viewer.component";
import { UserAccountLoginForm } from "app/user-account/components/user-account-login-form/user-account-login-form.component";
import { UserAccountRegisterViewer } from "app/user-account/containers/user-account-register-viewer/user-account-register-viewer.component";
import { UserAccountService } from "app/user-account/user-account.service";
import { AuthGuard } from "app/user-account/auth-guard.service";
import { AnonimousGuard } from "app/user-account/anonimous-guard.service";

const routes : Routes = [
    {
        path: 'account',
        children: [
            {
                path: 'login',
                component: UserAccountLoginViewer,
                canActivate: [AnonimousGuard]
            },
             {
                path: 'register',
                component: UserAccountRegisterViewer,
                canActivate: [AuthGuard]
            }
        ]
  },
]

@NgModule({
    declarations: [
        UserAccountLoginViewer,
        UserAccountRegisterViewer,
        UserAccountLoginForm,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    exports:[

    ],
    providers: [
        AuthGuard,
        AnonimousGuard
    ]
})

export class UserAccountModule{}