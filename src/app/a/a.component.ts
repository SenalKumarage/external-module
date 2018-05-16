import { Component, OnInit } from '@angular/core';
import { NewService } from '../external/new.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  constructor(private newSvc: NewService) {
    console.log('New Service created from A');
  }

  ngOnInit() {
  }

}
