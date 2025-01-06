import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimelineComponent } from './timeline.component';
import { By } from '@angular/platform-browser';

describe('TimelineComponent', () => {
    let component: TimelineComponent;
    let fixture: ComponentFixture<TimelineComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ TimelineComponent ],
        }).compileComponents();

        fixture = TestBed.createComponent(TimelineComponent);
        component = fixture.componentInstance;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should render the timeline items correctly', () => {
        component.items = [
            {
                id: 1,
                name: 'Event 1',
                subtitle: 'Subtitle 1',
                timeframe: '2023',
                description: 'Description 1',
                subentries: [
					{
						id: 3,
						name: 'Subevent 1',
						description: 'Description 1',
						timeframe: '2023'
					}
				]
            },
            {
                id: 2,
                name: 'Event 2',
                subtitle: 'Subtitle 2',
                timeframe: '2024',
                description: 'Description 2',
                subentries: [
					{
						id: 4,
						name: 'Subevent 2',
						description: 'Description 2',
						timeframe: '2024'
					},
					{
						id: 5,
						name: 'Subevent 3',
						description: 'Description 3',
						timeframe: '2025'
					}
				]
            },
        ];
        fixture.detectChanges();

        const timelineItems = fixture.debugElement.queryAll(By.css('.item'));
        expect(timelineItems.length).toBe(component.items.length);

		const timelineSubitems = fixture.debugElement.queryAll(By.css('.subitem'));
		expect(timelineSubitems.length).toBe(component.items.reduce((acc, item) => acc + item.subentries.length, 0));

		for(const i in timelineItems){
			const item = timelineItems[i];

			const itemName = item.query(By.css('.name'));
			expect(itemName).toBeTruthy();
			expect(itemName?.nativeElement.textContent).toBe(component.items[i].name);
			const itemSubtitle = item.query(By.css('.subtitle'));
			expect(itemSubtitle).toBeTruthy();
			expect(itemSubtitle?.nativeElement.textContent).toBe(component.items[i].subtitle);
			const itemTimeframe = item.query(By.css('.timeframe'));
			expect(itemTimeframe).toBeTruthy();
			expect(itemTimeframe?.nativeElement.textContent).toBe(component.items[i].timeframe);
			const itemDescription = item.query(By.css('.description'));
			expect(itemDescription).toBeTruthy();
			expect(itemDescription?.nativeElement.textContent).toBe(component.items[i].description);

			const subitems = item.queryAll(By.css('.subitem'));
			expect(subitems.length).toBe(component.items[i].subentries.length);
			for(const j in subitems){
				const subitem = subitems[j];

				const subitemName = subitem.query(By.css('.name'));
				expect(subitemName).toBeTruthy();
				expect(subitemName?.nativeElement.textContent).toBe(component.items[i].subentries[j].name);
				const subitemDescription = subitem.query(By.css('.description'));
				expect(subitemDescription).toBeTruthy();
				expect(subitemDescription?.nativeElement.textContent).toBe(component.items[i].subentries[j].description);
				const subitemTimeframe = subitem.query(By.css('.timeframe'));
				expect(subitemTimeframe).toBeTruthy();
				expect(subitemTimeframe?.nativeElement.textContent).toBe(component.items[i].subentries[j].timeframe);
			}
		}
    });
});
