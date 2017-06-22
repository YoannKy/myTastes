// import { TestBed, async, inject } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AppComponent } from './app.component';
// import { AuthService } from './auth/services/auth.service';
//
// describe('AppComponent', () => {
//
//   let service: AuthService;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         AuthService,
//         RouterTestingModule.withRoutes([])
//       ],
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//
//
//
//     var $ = {
//         slideNav : function() : void {}
//      };
//
//   }));
//
//   it('should create the app', inject([AuthService], (service: AuthService) => {
//     service = TestBed.get(AuthService);
//     expect(service).toBeTruthy();
//       async(() => {
//         const fixture = TestBed.createComponent(AppComponent);
//         const app = fixture.debugElement.componentInstance;
//         expect(app).toBeTruthy();
//       });
//   }));
//
//   it(`should have as title 'app'`, inject([AuthService], (service: AuthService) => {
//     expect(service).toBeTruthy();
//     async(() => {
//       const fixture = TestBed.createComponent(AppComponent);
//       const app = fixture.debugElement.componentInstance;
//       expect(app.title).toEqual('app');
//     });
//   }));
//   it('should render title in a h1 tag', inject([AuthService], (service: AuthService) => {
//     expect(service).toBeTruthy();
//     async(() => {
//       const fixture = TestBed.createComponent(AppComponent);
//       fixture.detectChanges();
//       const compiled = fixture.debugElement.nativeElement;
//       expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!!');
//     });
//   }));
// });
