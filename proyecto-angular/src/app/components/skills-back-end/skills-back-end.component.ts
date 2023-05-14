import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-skills-back-end',
  templateUrl: './skills-back-end.component.html',
  styleUrls: ['./skills-back-end.component.css']
})
export class SkillsBackEndComponent implements OnInit {

  skillsBackList: any;

  constructor(private datosPortfolio:PortfolioService) { }
  
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.skillsBackList=data.skills['back-end'];
    })
  }

}

