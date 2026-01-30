import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConsultaCepService } from '@services/CEP/consulta-cep.service';
import { LanguageService } from '@services/language.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit, OnDestroy {

		lang: any = "eng";
		langSubscription: Subscription;
		text: string = "About";
		text2: string = "Hi. I'm Nicole Gonçalves! I like being present in the creation of web projects, bringing solutions, watching the develop in full. Started as developer in 2015 with C#. Made my first college web project in 2017. Between 2015 and 2022 I worked as PJ as DEV, opened and keep a MEI in Brasil for that.";"Hi. I'm Nicoly Gonçalves! I like being present in the creation of web projects, bringing solutions, watching the develop in full. Started as developer in 2015 with C#. Made my first college web project in 2017. Between 2015 and 2022 I worked as PJ as DEV, opened and keep a MEI in Brasil for that.";
		text3: string = "Check if I can physically work in your city:";
		text4: string="Postal Code / CEP";
		text5: string="Postal Code / CEP";
		text6: string="Postal Code / CEP";
		text7: string="Postal Code / CEP";
		text8: string="Postal Code / CEP";
		text9: string="Postal Code / CEP";
		text10: string="Postal Code / CEP";
		text11: string="Postal Code / CEP";
		text12: string="Postal Code / CEP";
		
  images: string[] = [
    'assets/img/img1.jpg',
    'assets/img/img2.jpg',
    'assets/img/img3.jpg',
	'assets/img/img4.jpg',
    'assets/img/img5.jpg',
    'assets/img/img6.jpg',
	
  ];

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
	
  currentIndex = 0;
  intervalId: any;

  touchStartX = 0;
  touchEndX = 0;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 4000); // 4 segundos
  }

  next() {
    this.currentIndex =
      (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  // 👉 Swipe no celular
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchMove(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
  }

  onTouchEnd() {
    const distance = this.touchStartX - this.touchEndX;

    if (distance > 50) {
      this.next(); // deslizou para esquerda
    } else if (distance < -50) {
      this.prev(); // deslizou para direita
    }
  }

  	setLanguage(dado: any) {
		console.log(dado)
		this.lang = dado;
		if (this.lang == "eng") {
			this.text = "🩺 Services Provided"
			this.text2 = "1️⃣ 🏥 Hospital accompaniment during hospital stays";
			this.text3 ="2️⃣ 🩻 Accompaniment to medical appointments and exams";
			this.text4 ="3️⃣ 🧼 Assistance with daily activities";
			this.text5 ="4️⃣ 🤍 Physical and emotional support for the elderly";
			this.text6 ="5️⃣ 👨‍👩‍👧 Support and guidance for the family";
			this.text7 = "💙 Values"
			///////////////////////
			this.text8 ="1️⃣ 🤲 Care";
			this.text9 ="2️⃣ ✅ Responsibility";
			this.text10 ="3️⃣ 🤝 Respect";
			this.text11="4️⃣ 🌷 Humanized care";
			this.text12="5️⃣ 🛡️ Ethics and commitment";
		}
		else {
			this.text = "🩺 Serviços Prestados";
			this.text2 = "1️⃣ 🏥 Acompanhamento hospitalar durante internações";
			this.text3 ="2️⃣ 🩻 Acompanhamento em consultas e exames médicos";
			this.text4 ="3️⃣ 🧼 Auxílio nas atividades diárias";
			this.text5 ="4️⃣ 🤍 Suporte físico e emocional ao idoso";
			this.text6 ="5️⃣ 👨‍👩‍👧 Apoio e orientação à família";
			////////////////////////////////////
			this.text7 = "💙 Valores"
			this.text8 ="1️⃣ 🤲 Cuidado";
			this.text9 ="2️⃣ ✅ Responsabilidade";
			this.text10 ="3️⃣ 🤝 Respeito";
			this.text11="4️⃣ 🌷 Humanização";
			this.text12="5️⃣ 🛡️ Ética e compromisso";
		}

}
}
