import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FullscreenLoaderComponent } from './fullscreen-loader.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { LoaderService } from '../../services/loader.service';

describe('FullscreenLoaderComponent', () => {
    let component: FullscreenLoaderComponent;
    let fixture: ComponentFixture<FullscreenLoaderComponent>;
    let loaderService: LoaderService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ FullscreenLoaderComponent, SpinnerComponent ],
        }).compileComponents();

        loaderService = TestBed.inject(LoaderService);
        fixture = TestBed.createComponent(FullscreenLoaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should initialize display and show as true', () => {
        expect(component.display).toBeTrue();
        expect(component.show).toBeTrue();
    });

    it('should set display and show to true when loader is visible', async () => {
        loaderService.show();
        fixture.detectChanges();
        expect(component.display).toBeTrue();
        expect(component.show).toBeTrue();

		const loaderElement = fixture.nativeElement.querySelector('.container');
		expect(loaderElement).toBeTruthy();
		expect(loaderElement?.classList.contains('hidden')).toBeFalse();
    });

    it('should set show to false and then display to false when loader is hidden', fakeAsync(() => {
        loaderService.hide();
        fixture.detectChanges();

        expect(component.show).toBeFalse();

		let loaderElement = fixture.nativeElement.querySelector('.container');
		expect(loaderElement).toBeTruthy();
		expect(loaderElement?.classList.contains('hidden')).toBeTrue();

		tick(800);
		expect(component.display).toBeFalse();
		fixture.detectChanges();
		loaderElement = fixture.nativeElement.querySelector('.container');
		expect(loaderElement).toBeFalsy();
    }));
});
