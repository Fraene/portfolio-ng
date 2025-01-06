import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavBarComponent } from './nav-bar.component';
import { RouterModule } from '@angular/router';

describe('NavBarComponent', () => {
    let component: NavBarComponent;
    let fixture: ComponentFixture<NavBarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ RouterModule.forRoot([]), NavBarComponent ]
        }).compileComponents();

        fixture = TestBed.createComponent(NavBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should set atTop to true when window is at the top', () => {
        spyOnProperty(window, 'scrollY', 'get').and.returnValue(0);
        component.onWindowScroll();
        expect(component.atTop).toBeTrue();

		fixture.detectChanges();
		const navBarElement = fixture.nativeElement.querySelector('.container');
		expect(navBarElement).toBeTruthy();
		expect(navBarElement?.classList.contains('at-top')).toBeTrue();
    });

    it('should set atTop to false when window is scrolled down', () => {
        spyOnProperty(window, 'scrollY', 'get').and.returnValue(100);
        component.onWindowScroll();
        expect(component.atTop).toBeFalse();

		fixture.detectChanges();
		const navBarElement = fixture.nativeElement.querySelector('.container');
		expect(navBarElement).toBeTruthy();
		expect(navBarElement?.classList.contains('at-top')).toBeFalse();
    });
});
