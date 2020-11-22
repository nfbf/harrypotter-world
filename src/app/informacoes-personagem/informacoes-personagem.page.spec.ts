import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InformacoesPersonagemPage } from './informacoes-personagem.page';

describe('InformacoesPersonagemPage', () => {
  let component: InformacoesPersonagemPage;
  let fixture: ComponentFixture<InformacoesPersonagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacoesPersonagemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InformacoesPersonagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
