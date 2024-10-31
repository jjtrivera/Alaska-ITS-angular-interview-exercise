import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationWeatherComponent } from './station-weather.component';

describe('StationWeatherComponent', () => {
  let component: StationWeatherComponent;
  let fixture: ComponentFixture<StationWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationWeatherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
