import { Component, Injectable, OnInit } from '@angular/core';
import { LanguageService } from '@services/language.service';



@Component({
	selector: 'lang-switcher',
	templateUrl: './lang-switcher.component.html',
	styleUrls: ['./lang-switcher.component.scss']
})
export class LangSwitcherComponent implements OnInit {
	langMode: "eng" | "br" = "br";
	prefersENGScheme: MediaQueryList;
	isENGMode: boolean;
	prefersENGSchemeFromIdb: "eng" | "br" = "br";
	


	constructor(private language: LanguageService) {

	}

	async ngOnInit(): Promise<void> {

		if (this.prefersENGSchemeFromIdb) {
			this.langMode = this.prefersENGSchemeFromIdb;
			this.setLangMode(this.langMode);
		} else if (this.isENGMode && !this.prefersENGSchemeFromIdb) {
			this.setLangMode("eng");
		} else {
			this.setLangMode("br");
		}
	}

	toggleLangMode() {
		if (this.langMode === "br") {
			this.setLangMode("eng");
		} else {
			this.setLangMode("br");
		}
	}

	setLangMode(mode: "br" | "eng") {
		switch (mode) {
			case "br":
				document.body.classList.toggle("eng-lang", false);
				document.body.classList.toggle("br-lang", true);
				this.langMode = "br";
				break;
			case "eng":
				document.body.classList.toggle("eng-lang", true);
				document.body.classList.toggle("br-lang", false);
				this.langMode = "eng";
				break;
			default:
				console.error("Invalid lang");
		}

		this.language.setLanguage(this.langMode);

	}

}
