import { Component, OnInit, NgZone } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList =
    matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);
  users: Observable<User[]>;
  isDarkTheme : boolean = false;
  themeDirection : string = 'ltr';

  constructor(zone: NgZone, 
    private userService: UserService,
    private route: Router) {

    this.mediaMatcher.addListener(mql => {
      zone.run(() => this.mediaMatcher = mql);
    });
  }

  @ViewChild(MatSidenav) matSidenavComp: MatSidenav;

  ngOnInit() {
    this.users = this.userService.users
    this.userService.loadAll();

//Instead of using the child MatSideNav component, I added click event in the sidenav.component.html
    // this.route.events.subscribe(() => {
    //   if(this.isSmallScreen()){
    //     this.matSidenavComp.close();
    //   }
    // })
  }

  toggleDir(){
    this.themeDirection = this.themeDirection == 'ltr' ? 'rtl' : 'ltr';
    //this.matSidenavComp.toggle().then(() => {this.matSidenavComp.toggle()});
  }
  toggleTheme(){
    this.isDarkTheme = !this.isDarkTheme;
  }

  isSmallScreen(): boolean {
    return this.mediaMatcher.matches
  }
}
