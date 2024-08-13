import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { TestComponent } from './test/test.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

export const appRoutes: Routes = [
  {path: "" , redirectTo: "home" , pathMatch : "full"},
  { path: "home", component: HomeComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "contact", component: ContactComponent },
  { path: "about", component: AboutComponent },
  { path: "test", component: TestComponent },
  { path: 'portfolio/:id', component: ProjectDetailsComponent }
];
