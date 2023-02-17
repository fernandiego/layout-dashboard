import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoLayoutAreaDeTrabalhoComponent } from './novo-layout-area-de-trabalho.component';

describe('NovoLayoutAreaDeTrabalhoComponent', () => {
  let component: NovoLayoutAreaDeTrabalhoComponent;
  let fixture: ComponentFixture<NovoLayoutAreaDeTrabalhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoLayoutAreaDeTrabalhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoLayoutAreaDeTrabalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
