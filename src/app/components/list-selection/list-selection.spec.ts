import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSelection } from './list-selection';

describe('ListSelection', () => {
  let component: ListSelection;
  let fixture: ComponentFixture<ListSelection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListSelection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSelection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
