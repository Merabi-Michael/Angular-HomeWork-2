import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.scss']
})
export class VoterComponent implements OnInit {
  //
  @Input () voter! : string;

  //
  @Output () voted = new EventEmitter<boolean>();

  //
  didVote = false;

  //
  constructor() { }

  //
  ngOnInit(): void {}
  
  //
  vote (agreed : boolean): void {
    this.voted.emit(agreed);
    this.didVote = true;
  }

}
