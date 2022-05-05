import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public loggedIn: boolean;

  currentYear:Date =new Date();
  year:any = this.currentYear.getFullYear()

  constructor() { }

  ngOnInit(): void {
  }

}
