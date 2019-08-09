import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from '../../model/project.model';
import { ProjectService } from '../project.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../service/alert.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  @ViewChild('f', { static: true }) projectForm: NgForm;

  constructor(private projectService: ProjectService, private router: Router, private routes: ActivatedRoute, private alertService: AlertService) { }

  ngOnInit() {

  }
  onSubmit(form: NgForm) {
    const val = form.value;
    const project = new Project(val.name, val.description, val.owner, val.date, 'sprint-planning', null);
    this.projectService.addProjects(project);
    this.router.navigate(['../'], { relativeTo: this.routes });

  }

}