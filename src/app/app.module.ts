import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectService } from './projects/project.service';
import { Routes, RouterModule } from '@angular/router';
import { ProjectEditComponent } from './projects/project-edit/project-edit.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';

const appRoutes: Routes = [{
  path: 'projects', component: ProjectsComponent, children: [
    { path: '', component: ProjectListComponent, pathMatch: 'full' },
    { path: 'new', component: ProjectEditComponent }
  ]
},
{path: 'projects/:id', component: ProjectDetailComponent},
{
  path: '',
  redirectTo: '/projects',
  pathMatch: 'full'
},
{ path: '**', component: ProjectsComponent }];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent, HelloComponent, HeaderComponent, ProjectsComponent, ProjectEditComponent, ProjectListComponent, ProjectDetailComponent],
  bootstrap: [AppComponent],
  providers: [ProjectService]
})
export class AppModule { }
