import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { CrtHeaderComponent } from './crt-header.component';

describe('CrtHeaderComponent', () => {
    let fixture: ComponentFixture<CrtHeaderComponent>;
    let component: CrtHeaderComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ CrtHeaderComponent ],
        }).compileComponents();

        fixture = TestBed.createComponent(CrtHeaderComponent);
        component = fixture.componentInstance;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should initialize `displayCursor` to false', () => {
        expect(component.displayCursor).toBeFalsy();
    });

    it('should animate text', fakeAsync(() => {
        component.text = 'Test';
		component.randomizer = () => .5;
        fixture.detectChanges();

        tick(component.animationDelay);

        for (let i = 0; i < component.text.length; i++) {
            tick(component.animationInterval + component.cursorFlashLength);
            expect(component.actualText).toEqual(component.text.slice(0, i + 1));

			fixture.detectChanges();
			const textElement = fixture.nativeElement.querySelector('.text > span');
			expect(textElement).toBeTruthy();
			expect(textElement?.textContent).toEqual(component.text.slice(0, i + 1));
        }
    }));

    it('should handle empty text gracefully', fakeAsync(() => {
        component.text = '';
        fixture.detectChanges();

        component.ngOnInit();
        tick(component.animationDelay);

        expect(component.actualText).toEqual('');
    }));

    it('should toggle `displayCursor` correctly during animation', fakeAsync(() => {
        component.text = 'A';
        fixture.detectChanges();

        component.ngOnInit();
        tick(component.animationDelay);


        expect(component.displayCursor).toBeTruthy();
		fixture.detectChanges();
		let cursorElement = fixture.nativeElement.querySelector('.cursor');
		expect(cursorElement).toBeTruthy();
        tick(component.cursorFlashLength);

        expect(component.displayCursor).toBeFalsy();
		fixture.detectChanges();
		cursorElement = fixture.nativeElement.querySelector('.cursor');
		expect(cursorElement).toBeFalsy();
    }));
});
