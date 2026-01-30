import { Component, OnInit, OnDestroy } from '@angular/core';
import { LanguageService } from '@services/language.service';
import { Subscription } from 'rxjs';


@Component({
	selector: 'hero-banner',
	templateUrl: './hero-banner.component.html',
	styleUrls: ['./hero-banner.component.scss']
})
export class HeroBannerComponent implements OnInit, OnDestroy {

	

	lang: any = "eng";
	langSubscription: Subscription;
	text: string = "Acompanhamento hospitalar / Cuidadora de idosos";
	text2 = "Curitiba - PR";

	isBrowser: boolean = false;
	activeIndex: number;

	constructor(
		public language: LanguageService,
	) {

		this.langSubscription = this.language.langSubscription.subscribe(
			(langMode: any) => {
				this.setLanguage(langMode);
			}
		);
	}

		ngOnInit(): void { }

		ngOnDestroy() {
			this.langSubscription.unsubscribe();
	}

		setLanguage(dado: any) {
			this.lang = dado;
			if (this.lang == "eng") {
				this.text = "Hello! My name is Nicoly Gonçalves, specialized in hospital accompaniment and elderly care"
				this.text2 = "Curitiba - PR";
			}
			else {
				this.text = "Olá! Sou a Nicoly Gonçalves, especializada no acompanhamento hospitalar e atendimento a idosos"
				this.text2 = "Curitiba - PR";
			}
	}
}
