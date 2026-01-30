import { Component, OnInit } from '@angular/core';
import { LanguageService } from '@services/language.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'other-sites',
	templateUrl: './other-sites.component.html',
	styleUrls: ['./other-sites.component.scss']
})
export class OtherSitesComponent implements OnInit {

	otherSites: any[];
	
	lang: any = "eng";
	langSubscription: Subscription;
	text: string = "Finished projects";
	text2: string = "And challenges from each one";
	text3: string ="First website of Reisper Hotel";
	text4: string ="As a college work, in 2017 I helped to create the first version of the Reisper Hotel of Catanduva. Was the first time that I meet date mechanisms for hotel reservations.";
	text5: string ="Inspirated in Olx website from Brasil, this was robust and stable project with essentials security protocols as Json Web Token as more advanced APIs like map filters, with compost usage.";
	text6: string ="Charity website for adoption of pets, as a developer, I chose not storage images in our database, but use the Azure cloud to store all images.";

	constructor(
		public language: LanguageService,
	) {

		this.langSubscription = this.language.langSubscription.subscribe(
			(langMode: any) => {
				this.setLanguage(langMode);
			}
		);

	}

	ngOnInit(): void {}

	ngOnDestroy() {
		this.langSubscription.unsubscribe();
	}

	setLanguage(dado: any) {
		this.lang = dado;
		if (this.lang == "eng") {;
			this.text = "Main projects";
			this.text2 = "And challenges from each one";
			this.text3 ="Second version of Reisper Hotel";
			this.text4 = "As a college work, in 2017 I helped to create the second version of the Reisper Hotel of Catanduva. Was the first time that I meet date mechanisms for hotel reservations.";
			this.text5 = "Inspired by the Olx website from Brazil, this was a robust and stable project with essential security protocols such as Json Web Token as more advanced APIs like map filters, with compost usage.";
			this.text6 = "Charity website for adoption of pets, as a developer, I chose not to store images in our database, but use the Azure cloud to store all images.";
		}
		else {
			this.text = "Principais projetos";
			this.text2 = "E desafios encontrados em cada um";
			this.text3 = "Segunda versão do website Hotel Reisper";
			this.text4 = "Projeto realizado como trabalho de faculdade, em 2017 foi lançada a segunda versão do Hotel Reisper de Catanduva. Como parte do time de desenvolvimento, foi meu primeiro contato desenvolvendo com mecanismos de agendamento e datas.";
			this.text5 = "Inspirado no website de anúncios pessoais Olx, o resultado foi um robusto e estável projeto utilizando tanto ferramentas de segurança básicas como JWT quanto APIs mais avançados, como filtros de mapa e compostos.";
			this.text6 = "Projeto para adoção de pets que, como desenvolvedor, decidi armazenar todas as imagens utilizando o serviço da Azure, deixando o banco de dados com uma melhor performance de execução.";
		}
		this.callProjects();
	}

	callProjects(){
		this.otherSites = [
			{
				name: this.text3,
				image: "main",
				description: this.text4,
			},
			{
				name: "YourAds",
				image: "portfolio",
				description: this.text5,
			},
			{
				name: "AmiCão",
				image: "blog",
				description: this.text6,
			},
		];
	}
}
