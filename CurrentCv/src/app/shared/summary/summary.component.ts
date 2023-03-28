import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cv-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  public summary: string = 'Web Developer specializing in Front End development. Experienced with all stages of the development cycle for dynamic web projects.'
  constructor() { }

  ngOnInit(): void {
  }

}
