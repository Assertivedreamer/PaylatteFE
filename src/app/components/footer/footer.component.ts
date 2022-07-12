import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public loggedIn: boolean;

  currentYear:Date =new Date();
  year:any = this.currentYear.getFullYear()

  constructor( private Auth: AuthService) {    
  }
  ngOnInit() {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
    
  }

  // ngOnInit(): void {
  // }

}
