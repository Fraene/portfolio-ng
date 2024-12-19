import { EventEmitter, Injectable, signal } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class LoaderService {
	private showLoader = signal(true);

	public isVisible = this.showLoader.asReadonly();

	public show(){
		this.showLoader.set(true);
	}

	public hide(){
		this.showLoader.set(false);
	}

	public toggle(){
		this.showLoader.update(v => !v);
	}
}
