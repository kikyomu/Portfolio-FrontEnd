import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-skills-herramientas',
  templateUrl: './skills-herramientas.component.html',
  styleUrls: ['./skills-herramientas.component.css']
})
export class SkillsHerramientasComponent implements OnInit {

  skillsToolsList: any;

  constructor(private datosPortfolio:PortfolioService) { }
  
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.skillsToolsList=data.skills['herramientas'];
    })
  }

}
