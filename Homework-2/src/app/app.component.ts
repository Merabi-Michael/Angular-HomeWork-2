import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Homework-2';

  //
  voters = [`Mr.IQ`, `Ms.Universe`, `Bombasto`];

  //
  agreed: number = 0;

  //
  disagreed: number = 0;
  
  //
  onVoted (agreed: boolean) {
    console.log(agreed);

    if(agreed) {
      this.agreed++;
    }else {
      this.disagreed++;
    }
  }
}
