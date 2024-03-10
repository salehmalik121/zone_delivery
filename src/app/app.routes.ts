import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { authGuard } from './guard/auth.guard';
import { NotAllowedComponent } from './pages/not-allowed/not-allowed.component';
import { AddProductComponent } from './pages/Dashboard/add-product/add-product.component';
import { ViewProductComponent } from './pages/Dashboard/view-product/view-product.component';
import { MainPageComponent } from './pages/Dashboard/main-page/main-page.component';
import { ViewTableComponent } from './pages/Dashboard/view-table/view-table.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { EditProductComponent } from './pages/Dashboard/edit-product/edit-product.component';
import { WalletComponent } from './pages/Dashboard/wallet/wallet.component';
import { SuccessComponent } from './pages/Dashboard/wallet/subpages/success/success.component';


export const routes: Routes = [
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: '', component: SigninComponent },
    { path: 'dashboard', component: MainPageComponent , canActivate: [authGuard] , children:[
        {path: "" , component: ViewTableComponent},
        {path: "addProduct" , component: AddProductComponent},
        {path: "viewproduct/:pid" , component: ViewProductComponent},
        {path: "edit/:id" , component: EditProductComponent},
        {path: "wallet" , component: WalletComponent },
        

    ] },
    { path: 'notAllowed', component: NotAllowedComponent },
    { path: 'forgotpassword', component: ForgotPasswordComponent },
    {path: "success/:amount/:acc" , component: SuccessComponent},
    
];
