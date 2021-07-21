import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Dirección';
  position = {
    lat: -34.681,
    lng: -58.371
  };
  centro={
    lat: 50,
    lng: 50
  }
  label = {
    color: 'white',
    text: 'Bicicletería'
  };


}
