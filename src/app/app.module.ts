import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectService } from './projects/project.service';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [{ path: 'projects', component: ProjectsComponent },
{ path: '',
    redirectTo: '/projects',
    pathMatch: 'full' },
{ path: '**', component: ProjectsComponent }];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, ProjectsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProjectService]
})
export class AppModule { }
