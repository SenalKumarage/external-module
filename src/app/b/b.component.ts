import { Component, OnInit } from '@angular/core';
import { NewService } from '../external/new.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  constructor(private newSvc: NewService) {
    console.log('New Service created from B');
  }

  ngOnInit() {
  }

}
