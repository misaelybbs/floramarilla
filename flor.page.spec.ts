import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlorPage } from './flor.page';

describe('FlorPage', () => {
  let component: FlorPage;
  let fixture: ComponentFixture<FlorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FlorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
