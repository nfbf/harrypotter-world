import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InformacoesCasaPage } from './informacoes-casa.page';

describe('InformacoesCasaPage', () => {
  let component: InformacoesCasaPage;
  let fixture: ComponentFixture<InformacoesCasaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacoesCasaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InformacoesCasaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
