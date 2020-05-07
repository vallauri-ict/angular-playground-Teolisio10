import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
    // OGGETTO DI CONFIGURAZIONE CHE SERVIRA' PER IL RICHIAMO DA HTML
    selector: '[appDropdown]'
})
export class DropdownDirective {
    // EFFETTUIAMO IL BINDING ALLA CLASSE GIA' ESISTENTE DI BOOTSTRAP open
    // IL FUNZIONAMENTO QUINDI PERMETTE DI ATTIVARE/DISATTIVARE UNA CLASSE
    @HostBinding('class.open') isOpen: boolean = false;

    constructor (private elRef: ElementRef) { }

    /*
    // CI METTIAMO IN ASCOLTO SUL CLICK
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
    */
    // FACENDO COSI' GESTIAMO ANCHE LA CHIUSURA DEL DROPDOWN SE SI PREME DA UN'ALTRA PARTE
    // OCCORRE QUINDI CONTROLLARE CHI HA SCATENATO L'EVENTO E CONFRONTIAMO 
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
        /*if (this.isOpen == this.elRef.nativeElement.contains(event.target))
            this.isOpen = !this.isOpen
        else 
            this.isOpen = false;*/
    }
}