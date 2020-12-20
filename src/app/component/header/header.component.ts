import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  logout(){
    this.auth.logout();
  }

}