import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../project.service';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.css']
})
export class TeamMemberComponent implements OnInit {

teamMemberForm: FormGroup;
id: number;
  constructor(private routes: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit() {
    this.routes.parent.params.subscribe( 
      params => {
        this.id = +params['id'];
      }
    );
    this.initForm();
  }

  initForm(){
    const project = this.projectService.fetchProjectById(this.id);
    let teamMembers = new FormArray([]);
  if(project['teamMembers']){
    for(let teamMember of project.teamMembers){
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

  onDeleteMember(index: number){
 (<FormArray>this.teamMemberForm.get('teamMembers')).removeAt(index);
  }

  getControls() {
    return (<FormArray>this.teamMemberForm.get('teamMembers')).controls;
  }

  onSubmit(){
    
  }

}