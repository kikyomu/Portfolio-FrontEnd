import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-skills-front-end',
  templateUrl: './skills-front-end.component.html',
  styleUrls: ['./skills-front-end.component.css']
})
export class SkillsFrontEndComponent implements OnInit {

  skillsFrontList: any;

  constructor(private datosPortfolio:PortfolioService) { }
  
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.skillsFrontList=data.skills['front-end'];
    })
  }

}
