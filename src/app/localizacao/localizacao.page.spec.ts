import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocalizacaoPage } from './localizacao.page';

describe('LocalizacaoPage', () => {
  let component: LocalizacaoPage;
  let fixture: ComponentFixture<LocalizacaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LocalizacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
