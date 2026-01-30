import { Component, OnInit } from '@angular/core';
import { LanguageService } from '@services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

	lang: any = "eng";
	langSubscription: Subscription;
	text: string = "Olá! Sou a Nicoly Gonçalves, especializada no atendimento a idosos e acompanhamento hospitalar em Curitiba, PR.";
	text2 : string;
	

  constructor(
	public language: LanguageService,
  ) { 

	this.langSubscription = this.language.langSubscription.subscribe(
		(langMode: any) => {
			this.setLanguage(langMode);
		}
	);
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
	this.langSubscription.unsubscribe();
}

setLanguage(dado: any) {
	this.lang = dado;
	if (this.lang == "eng") {
		this.text = ""
		this.text2 = "Whatsapp: 41 9678-0876";
	}
	else {
		this.text = ""
		this.text2 = "Whatsapp: 41 9678-0876";
	}
}

}
