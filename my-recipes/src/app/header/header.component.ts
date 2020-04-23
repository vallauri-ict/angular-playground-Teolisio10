import { Component, EventEmitter, Output } from '@angular/core';

@Component(
    {
        selector: 'app-header',
        templateUrl: './header.component.html'
    }
)
export class HeaderComponent {
    collapsed: boolean = true;
    
    // EVENT-BINDING, EMETTERA' L'EVENTO CON UNA STRINGA
    @Output() featureSelect = new EventEmitter<string>();

    onSelect(feature: string) {
        this.featureSelect.emit(feature);
    }
}