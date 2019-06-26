import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

projects = ['ING-BANKING','ING-PAYMENTS','ING-DEBIT','ING-ONINEBANKING'];
  constructor() { }

  ngOnInit() {
  }

}