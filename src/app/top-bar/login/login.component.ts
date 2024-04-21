import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private dialogRef: MatDialogRef<LoginComponent>,
  ) {}

  loginGuest() {
    this.dialogRef.close(false);
  }

  loginMember() {
    this.dialogRef.close(true);
  }
}
