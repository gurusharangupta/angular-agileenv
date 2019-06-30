import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project.service';
import { Project } from '../model/project.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private projectService: ProjectService, private router: Router, private routes: ActivatedRoute) { }

  ngOnInit() {

  }




}