import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FullscreenLoaderComponent } from './components/fullscreen-loader/fullscreen-loader.component';
import { RouterModule } from '@angular/router';

describe('AppComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				AppComponent,
			],
			imports: [
				RouterModule.forRoot([]),
				NavBarComponent,
				FullscreenLoaderComponent
			]
		}).compileComponents();
	});

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});
});
