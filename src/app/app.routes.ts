import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'product/:id', component: ProductDetailComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent }
];
