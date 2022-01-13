import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-version-child',
  templateUrl: './version-child.component.html',
  styleUrls: ['./version-child.component.scss']
})
export class VersionChildComponent implements OnInit, OnChanges {

  //
  @Input () minor!: number;

  //
  @Input () major!: number;

  // 
  changeLog: string[] = [];

  constructor() { }

  ngOnInit(): void {}

  //
  ngOnChanges(changes: SimpleChanges): void {

    const log: string[] = [];
    
    for(const propName in changes) {
        const changedProp = changes [propName];
        const currentValue = changedProp.currentValue;

        if(changedProp.isFirstChange()) {
        log.push(`initial value of ${propName} set to ${currentValue}`)
      }
    else {
      log.push(` ${propName} changed from ${changedProp.previousValue} to ${changedProp.currentValue}`);
      }
    }
    this.changeLog.push(log.join(`,`));
  }
}
