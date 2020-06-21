import { Component, OnInit, Input } from '@angular/core';
import { Count } from '../count'
import { DbServiceService } from '../db-service.service'

@Component({
  selector: 'app-db-display',
  templateUrl: './db-display.component.html',
  styleUrls: ['./db-display.component.css']
})
export class DbDisplayComponent implements OnInit {

  @Input() count: number
  @Input() name: string
  @Input() id: string
  @Input() sub_date: Date

  counts: Count[]

  constructor(private dbService: DbServiceService) { }

  ngOnInit(): void {
    this.getCounts()
  }

  getCounts(): void {
    this.dbService.getCounts().subscribe(counts => {
      console.log(counts)
      this.counts = counts
    })
  }

  deleteCount(id): void {
    console.log(id)
    this.dbService.deleteCount(id).subscribe()
  }

  updateCount(id): void {
    console.log(`updating count ${id}`)
    this.counts.map(count => {
      if (count.id == id) {
        this.count = count.count
        this.name = count.name
        this.id = count.id
      }
    })
  }

  saveUpdate(): void {
    console.log(`updated count ${this.id}`)
    let dbObj = {
      name: this.name,
      count: this.count,
      sub_date: this.sub_date,
      id: this.id
    }
    this.dbService.updateCount(dbObj).subscribe(count => {
      console.log(count)
      this.count = null
      this.id = null
      this.name = null
      this.sub_date = null
    })
  }

}
