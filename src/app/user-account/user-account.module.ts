import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";
import { UserAccountLoginViewer } from "app/user-account/containers/user-account-login-viewer/user-account-login-viewer.component";
import { UserAccountLoginForm } from "app/user-account/components/user-account-login-form/user-account-login-form.component";
import { UserAccountRegisterViewer } from "app/user-account/containers/user-account-register-viewer/user-account-register-viewer.component";

const routes : Routes = [
    {
        path: 'account',
        children: [
            {
                path: 'login',
                component: UserAccountLoginViewer  
            },
             {
                path: 'register',
                component: UserAccountRegisterViewer  
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

    ]
})

export class UserAccountModule{}