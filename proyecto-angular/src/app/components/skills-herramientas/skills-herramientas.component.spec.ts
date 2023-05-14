import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsHerramientasComponent } from './skills-herramientas.component';

describe('SkillsHerramientasComponent', () => {
  let component: SkillsHerramientasComponent;
  let fixture: ComponentFixture<SkillsHerramientasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsHerramientasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsHerramientasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
