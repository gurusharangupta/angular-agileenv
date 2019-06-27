import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../project.service';
import { Project } from '../../../model/project.model';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.css']
})
export class TeamMemberComponent implements OnInit {

  teamMemberForm: FormGroup;
  id: number;
  project: Project;
  constructor(private router: Router,private routes: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit() {
    this.routes.parent.params.subscribe(
      params => {
        this.id = +params['id'];
      }
    );
    this.initForm();
  }

  initForm() {
    this.project = this.projectService.fetchProjectById(this.id);
    let teamMembers = new FormArray([]);
    if (this.project['teamMembers']) {
      for (let teamMember of this.project.teamMembers) {
        teamMembers.push(
          new FormGroup({
            'name': new FormControl(teamMember.name, Validators.required),
            'expertise': new FormControl(teamMember.expertise, Validators.required)
          }));
      }
    }
    this.teamMemberForm = new FormGroup({
      'teamMembers': teamMembers
    });
  }

  onAddMember() {
    (<FormArray>this.teamMemberForm.get('teamMembers')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'expertise': new FormControl(null, Validators.required)
    }));
  }

  onDeleteMember(index: number) {
    (<FormArray>this.teamMemberForm.get('teamMembers')).removeAt(index);
  }

  getControls() {
    return (<FormArray>this.teamMemberForm.get('teamMembers')).controls;
  }

  onSubmit() {
    this.project.teamMembers = this.teamMemberForm.get('teamMembers').value;
    this.projectService.updateProject(this.id, this.project);
  this.router.navigate(['../'],{relativeTo: this.routes});
  }

}