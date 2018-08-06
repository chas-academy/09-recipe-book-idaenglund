import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  register() {
    this.auth.register(this.model.fullname, this.model.email, this.model.password)
      .subscribe(
        data => {
          this.router.navigate(['/']);
        },
        error => {
          console.error(error);
        }
      );
  }


}