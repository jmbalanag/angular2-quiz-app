import { Component, OnInit } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';

@Component({
  selector: 'landing',
  styleUrls: ['./landing.less'],
  templateUrl: './landing.html',
  directives: [
    RouterLink
  ]
})
export class LandingComponent implements OnInit {

  // The private _router property is set automatically
  public constructor(private _router: Router) {
    console.log('Entered LandingComponent constructor.');
  }

  public ngOnInit() {
    // Get some data here for example
  }

}