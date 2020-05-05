// import { Directive, Input, HostListener, ElementRef, Renderer2, OnInit, HostBinding } from '@angular/core';
import { Directive, Input, HostListener, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective implements OnInit {
  // DEFINIAMO I COLORI ASSEGNANDOGLI UN VALORE STANDARD
  @Input() defaultColor: string = 'LightCyan';
  // GLI DIAMO IL NOME DELLA DIRETTIVA, COSI' ACCEDENDO AD ESSA ACCEDIAMO A QUESTO
  @Input('appHighlight') highlightColor: string = 'Cyan';
  // CREAZIONE DEL BINDING DI style.backgroundColor
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  // INIETTIAMO IL RIFERIMENTO DELL'ELEMENTO DEL DOM IN recipe-item E shopping-list
  // MEGLIO USARE IL Renderer2 RISPETTO ALLA MODIFICA FISICA BRUTALE
  // SI PUO' SEMPLIFICARE GRAZIE ALL' HostBinding
  constructor(/*private elRef: ElementRef, private renderer: Renderer2*/) { }

  // VISTO CHE IL COLORE DI DEFAULT DI ANGULAR E' TRASPARENTE, SETTIAMO IL NOSTRO DI DEFAULT
  ngOnInit() {
    // this.elRef.nativeElement.style.backgroudColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', this.defaultColor);
    this.backgroundColor = this.defaultColor;
  }

  // CI METTIAMO IN ASCOLTO DELL'EVENTO JAVASCRIPT mouseenter
  @HostListener('mouseenter') mouseenter(eventData: Event) {
    // this.elRef.nativeElement.style.backgroudColor = this.highlightColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', this.highlightColor);
    this.backgroundColor = this.highlightColor;
  }

  // OCCORRE GESTIRE IL mouseleave ALTRIMENTI IL COLORE RIMANE SETTATO
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // SETTIAMO IL COLORE DI DEFAULT
    // this.elRef.nativeElement.style.backgroudColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', this.defaultColor);
    this.backgroundColor = this.defaultColor;
  }
}
