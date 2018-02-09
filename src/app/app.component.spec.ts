import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  // testing - do npm test or yarn test 
  fit(`should have as title 'Recipes'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Recipes');
  }));

  // you can run debugger in your test. 

  fit(`should render title in a h1 tag`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); 
    const compiled = fixture.debugElement.nativeElement; 
    expect(compiled.querySelector('h1').textContent).toEqual('Welcome to Recipes');
  }));
});
