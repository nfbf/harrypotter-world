import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuscarPersonagemPage } from './buscar-personagem.page';

describe('BuscarPersonagemPage', () => {
  let component: BuscarPersonagemPage;
  let fixture: ComponentFixture<BuscarPersonagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarPersonagemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuscarPersonagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
