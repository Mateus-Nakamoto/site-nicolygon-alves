import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConsultaCepService } from '@services/CEP/consulta-cep.service';
import ValidateForm from '@services/CEP/validationform';
import { LanguageService } from '@services/language.service';
import { Subscription, distinctUntilChanged, empty, map, switchMap, tap } from 'rxjs';


@Component({
	selector: 'profile-info',
	templateUrl: './profile-info.component.html',
	styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit, OnDestroy {
	public listar!: FormGroup;
	public estados: any = [];
	public cidades: any = [];
	public Cidade: string = "";
	public Estado: string = "";
	public enderecos: string;
	public procurarCidade:string = "";
	public procurarEstado:string = "";
	public enderecoCompleto:string= "";
	public enderecoVer:boolean;
	signUpForm!: FormGroup;
	cep:any;



	lang: any = "eng";
	langSubscription: Subscription;
	text: string = "About";
	text2: string = "Hi. I'm Nicoly Gonçalves! I like being present in the creation of web projects, bringing solutions, watching the develop in full. Started as developer in 2015 with C#. Made my first college web project in 2017. Between 2015 and 2022 I worked as PJ as DEV, opened and keep a MEI in Brasil for that.";"Hi. I'm Nicoly Gonçalves! I like being present in the creation of web projects, bringing solutions, watching the develop in full. Started as developer in 2015 with C#. Made my first college web project in 2017. Between 2015 and 2022 I worked as PJ as DEV, opened and keep a MEI in Brasil for that.";
	text3: string = "Check if I can physically work in your city:";
	text4: string="Postal Code / CEP";

	constructor(
		private fb: FormBuilder,
		private api: ConsultaCepService,
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

	aplicaCssErro(campo) {
		return {
			'has-error': this.verificaValidTouched(campo),
			'has-feedback': this.verificaValidTouched(campo)
		};
	}

	verificaValidTouched(campo) {
		return !campo.valid && campo.touched;
	}

	limparFiltros() {
		this.signUpForm.reset();
	};

	checarDispo(){
}
	


	ngOnDestroy() {
		this.langSubscription.unsubscribe();
}

	setLanguage(dado: any) {
		console.log(dado)
		this.lang = dado;
		if (this.lang == "eng") {
			this.text = "About"
			this.text2 = "I work as a hospital companion and elderly caregiver in the city of Curitiba, PR. I specialize in humanized care, providing comprehensive support to older adults by assisting with daily activities and accompanying them during hospital stays and medical appointments. My work is guided by care, responsibility, and respect, ensuring comfort, safety, and well-being for both the patient and their family.";
			this.text3 ="Check my disponibility to physically work in your city:";
			this.text4 ="Postal Code / CEP"
		}
		else {
			this.text = "Sobre mim"
			this.text2 = "Atuo como acompanhante hospitalar e cuidadora de idosos, na cidade de Curitiba, PR. Especializada no atendimento humanizado, oferecendo suporte integral ao idoso, auxiliando nas atividades diárias, no acompanhamento durante internações e em consultas médicas. com trabalho pautado no cuidado, na responsabilidade e no respeito, garantindo conforto, segurança e bem-estar tanto para o paciente quanto para a família.";
			this.text3 ="Checar minha disponibilidade para o trabalho presencial em sua cidade:";
			this.text4 ="CEP";
		}
}
	
}
