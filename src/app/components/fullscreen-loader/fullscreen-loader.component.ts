import { Component, effect, signal } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';
import { LoaderService } from '../../services/loader.service';

@Component({
	selector: 'c-fullscreen-loader',
	templateUrl: './fullscreen-loader.component.html',
	imports: [ SpinnerComponent ],
	styleUrls: [ './fullscreen-loader.component.scss' ]
})
export class FullscreenLoaderComponent {
	public display = true;
	public show = true;
	public message = 'Loading';

	private fadeTimeout?: any;

	constructor(
		public loader: LoaderService
	){
		effect(() => {
			const visible = this.loader.isVisible();

			if(visible && !this.show){
				clearTimeout(this.fadeTimeout);
				this.display = true;
				this.fadeTimeout = setTimeout(() => this.show = true);
			} else if(!visible && this.show){
				clearTimeout(this.fadeTimeout);
				this.show = false;
				this.fadeTimeout = setTimeout(() => this.display = false, 800);
			}
		})
	}
}
