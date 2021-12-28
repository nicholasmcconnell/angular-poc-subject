import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private _interactionService: InteractionService) { }

  ngOnInit(): void {
    this._interactionService.teacherMessage$.subscribe(message => {
      if (message === "Good Morning!") {
        alert('Good morning, Teacher!')
      } else if (message === 'Well done!') {
        alert('Thank you, Teacher!')
      }
    })
  }

}
