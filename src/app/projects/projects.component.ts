import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project.service';
import { Project } from '../model/project.model';
import { Router, ActivatedRoute } from '@angular/router';
import { WebsocketService } from '../service/websocket.service';
import { Notification } from '../model/notification.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

notifications: Notification[] = [];
  constructor(private projectService: ProjectService, private router: Router, private routes: ActivatedRoute, private websocketService: WebsocketService) { }

  ngOnInit() {
  this.websocketService.getLiveData1().subscribe((data: Notification) => {
      console.log(data); 
    });
  }




}