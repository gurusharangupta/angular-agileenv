import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectService } from './projects/project.service';
import { Routes, RouterModule } from '@angular/router';
import { ProjectEditComponent } from './projects/project-edit/project-edit.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { TeamMemberComponent } from './projects/project-detail/team-member/team-member.component';
import { ProjectOverviewComponent } from './projects/project-detail/project-overview/project-overview.component';
import { SprintPlanningComponent } from './sprint/sprint-planning/sprint-planning.component';
import { SprintService } from './sprint/sprint.service';
import { UserStoryListComponent } from './sprint/sprint-planning/user-story-list/user-story-list.component';
import { UserStoryEditComponent } from './sprint/sprint-planning/user-story-edit/user-story-edit.component';
import { UserStoryResolverService } from './sprint/sprint-planning/user-story-list/user-story-resolver.service';
import { UserStoryDetailComponent } from './sprint/sprint-planning/user-story-detail/user-story-detail.component';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthService } from './service/auth.service';

import { AlertComponent } from './shared/alert/alert.component';
import { AlertService } from './service/alert.service';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './service/auth-interceptor.service';
import { AuthGuardService } from './service/auth-guard.service';
import { ProjectResolverService } from './resolver/project-resolver.service';
import { ProjectRepository } from './repository/project-repository.service';


const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'projects', component: ProjectsComponent, resolve: [ProjectResolverService], canActivate: [AuthGuardService], children: [
      { path: '', component: ProjectListComponent, pathMatch: 'full' },
      { path: 'new', component: ProjectEditComponent }
    ]
  },
  {
    path: 'projects/:id', component: ProjectDetailComponent, canActivate: [AuthGuardService], children: [
      { path: '', component: ProjectOverviewComponent },
      { path: 'teammember', component: TeamMemberComponent },
      {
        path: 'userstory', component: UserStoryListComponent, resolve: { UserStoryResolverService }, children:
          [
            { path: 'new', component: UserStoryEditComponent },
            { path: ':id', component: UserStoryDetailComponent },
            { path: ':id/edit', component: UserStoryEditComponent },

          ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full'
  },
  { path: '**', component: AuthComponent }];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, HeaderComponent, ProjectsComponent, ProjectEditComponent, ProjectListComponent,
    ProjectDetailComponent, TeamMemberComponent, ProjectOverviewComponent, SprintPlanningComponent, UserStoryListComponent,
    UserStoryEditComponent,
    UserStoryDetailComponent,
    AuthComponent,
    SignupComponent,
    AlertComponent,
    LoadingSpinnerComponent],
  bootstrap: [AppComponent],
  providers: [ProjectService, SprintService, UserStoryResolverService, AuthService, AlertService, AuthGuardService, ProjectRepository,ProjectResolverService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true

    }]
})
export class AppModule { }
