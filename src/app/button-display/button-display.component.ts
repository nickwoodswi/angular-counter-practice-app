import { Component, OnInit, Input } from '@angular/core';
import { DbServiceService } from '../db-service.service';
import * as uuid from 'uuid'

@Component({
  selector: 'app-button-display',
  templateUrl: './button-display.component.html',
  styleUrls: ['./button-display.component.css']
})
export class ButtonDisplayComponent implements OnInit {

  @Input() count: number
  @Input() name: string

  constructor(private dbService: DbServiceService) { }

  ngOnInit(): void {
    this.count = 0
  }

  add() {
    let prevCount = this.count + 1
    this.count = prevCount
  }

  
  clear() {
    this.count = 0
  }

  save() {
    if (!this.name) {
      window.alert('Name is required')
      return
    } else {
      let dbObj = {
        id: uuid.v4(),
        name: this.name,
        count: this.count,
        sub_date: new Date()
      }

      this.dbService.postCounts(dbObj).subscribe(count => {
        console.log(count)
      })

      this.count = 0
      this.name = ''
    }
  }

}
