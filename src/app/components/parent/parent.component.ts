import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private _interactionService: InteractionService) { }

  ngOnInit(): void {
  }

  greetStudent() {
    this._interactionService.sendMessage('Good Morning!');
  }

  appreciateStudent() {
    this._interactionService.sendMessage('Well done!');
  }

}
