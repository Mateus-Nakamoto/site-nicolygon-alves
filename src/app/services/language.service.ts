import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public langMode:"eng" | "br" = "eng";
  langSubscription: Subject<"eng" | "br">;




  constructor( ) {
    this.langSubscription= new Subject();
   }



  public setLanguage(mode: "br" | "eng"){
    this.langMode = mode;
    this.langSubscription.next(mode);
  }


}
