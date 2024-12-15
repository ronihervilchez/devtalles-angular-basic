import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

@NgModule({
  declarations: [RegisterPageComponent],
  imports: [AuthRoutingModule, CommonModule, ReactiveFormsModule],
})
export class AuthModule {}
