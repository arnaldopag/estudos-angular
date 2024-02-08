import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent implements OnInit {
  @Input() visible: boolean = true;
  @Input() notFoundMessage: string = 'Page not found';
  @Input() resetlinkText: string = 'Go to home page';
  @Input() resetLinkRoute: string = '/';

  
  constructor() {}

  ngOnInit(): void {}
}
