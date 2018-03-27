import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Validators, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {

  avatars = [
    'svg-1', 'svg-2', 'svg-3', 'svg-4'
  ];
  user: User;
  name = new FormControl('', [Validators.required]);
  avatarControl = new FormControl('', [Validators.required]);
  constructor(private service: UserService,
    private dialogRef: MatDialogRef<NewContactDialogComponent>
  ) { }

  ngOnInit() {
    this.user = new User();
  }

  getErrorMessage() {
    return this.name.hasError('required') ? 'required field' : '';
  }

  save(){
    this.service.addUser(this.user).then(user => {
      this.dialogRef.close(user)
    })
  }

  dismiss(){
      this.dialogRef.close(null);
  }
}
