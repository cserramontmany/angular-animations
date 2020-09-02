import { Component, OnInit } from '@angular/core';
import { slideFromBottom } from './../../shared/animations/routerTransition';

@Component({
  selector: 'app-a-anim',
  templateUrl: './a-anim.component.html',
  styleUrls: ['./a-anim.component.scss'],
  animations: [slideFromBottom()]
})
export class AAnimComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
