import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ROUTES } from 'src/app/core/constants/router-list';
import { LocalStorageWorkerService } from 'src/app/services/local-storage-worker.service';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss'],
})
export class LoginLayoutComponent implements OnInit {
  public authForm: FormGroup = new FormGroup({});

  constructor(
    private router: Router,
    private localStorageWorker: LocalStorageWorkerService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.authForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.pattern(/[a-zA-Z0-9]/),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        ),
      ]),
    });
  }

  public sendForm(): void {
    this.authForm.disable();
    this.localStorageWorker.setAuthData({
      username: this.authForm.value?.username,
      password: this.authForm.value?.password,
    });
    this.authForm.enable();
    this.router.navigate([ROUTES.MAIN_ROUTH]).then();
  }
}
