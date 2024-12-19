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
	public display = false;
	public show = false;
	public message = 'Loading';

	constructor(
		public loader: LoaderService
	){
		effect(() => {
			const visible = this.loader.isVisible();

			if(visible && !this.show){
				this.display = true;
				setTimeout(() => this.show = true);
			} else if(!visible && this.show){
				this.show = false;
				setTimeout(() => this.display = false, 800);
			}
		})
	}
}
