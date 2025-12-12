import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeCardRenderComponent } from './node-card-render.component';

describe('NodeCardRenderComponent', () => {
  let component: NodeCardRenderComponent;
  let fixture: ComponentFixture<NodeCardRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NodeCardRenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodeCardRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
