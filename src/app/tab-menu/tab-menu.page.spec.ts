import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabMenuPage } from './tab-menu.page';

describe('TabMenuPage', () => {
  let component: TabMenuPage;
  let fixture: ComponentFixture<TabMenuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
