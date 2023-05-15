import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsFrontEndComponent } from './components/skills-front-end/skills-front-end.component';
import { SkillsBackEndComponent } from './components/skills-back-end/skills-back-end.component';
import { SkillsHerramientasComponent } from './components/skills-herramientas/skills-herramientas.component';
import { PortfolioService } from './servicios/portfolio.service';
import { HttpClientModule } from '@angular/common/http';
import { SkillsHardComponent } from './components/skills-hard/skills-hard.component';
import { SkillsSoftComponent } from './components/skills-soft/skills-soft.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'portfolio',component:PortfolioComponent},
  {path:'iniciar-sesion',component:IniciarSesionComponent},
  {path:'',redirectTo:'iniciar-sesion',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobreMiComponent,
    ExperienciaLaboralComponent,
    HabilidadesComponent,
    ProyectosComponent,
    EducacionComponent,
    BannerComponent,
    FooterComponent,
    SkillsFrontEndComponent,
    SkillsBackEndComponent,
    SkillsHerramientasComponent,
    SkillsHardComponent,
    SkillsSoftComponent,
    IniciarSesionComponent,
    PortfolioComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 38,
      space: -7,
      outerStrokeWidth: 7,
      innerStrokeWidth: 7,
      outerStrokeColor: "#8D8DD6",
      innerStrokeColor: "#e3e3e3",
      animationDuration: 300,
      animation: true,
      showUnits: false,
      backgroundPadding: 7,
      showImage: true,
      showBackground: false
      
    })
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
