import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'c-crt-header',
	templateUrl: './crt-header.component.html',
	styleUrls: [ './crt-header.component.scss' ]
})
export class CrtHeaderComponent implements OnInit {
	@Input() public text = '';

	public actualText = '';
	public displayCursor = false;

	public readonly animationDelay = 1200;
	public readonly animationInterval = 100;
	public readonly animationIntervalJitter = 50;
	public readonly cursorFlashLength = 50;

	public randomizer: () => number = Math.random;

	public ngOnInit() {
		this.AnimateText();
	}

	private AnimateText(): void {
		this.actualText = '';

		const animationStep = (i: number) => {
			this.displayCursor = true;

			setTimeout(() => {
				this.displayCursor = false;
				this.actualText += this.text[i];

				if(i !== this.text.length - 1) {
					const jitter = (this.randomizer() * this.animationIntervalJitter * 2) - this.animationIntervalJitter;

					setTimeout(() => animationStep(i + 1), this.animationInterval + jitter);
				}
			}, this.cursorFlashLength);
		};

		if(this.text)
			setTimeout(() => animationStep(0), this.animationDelay);
	}
}
