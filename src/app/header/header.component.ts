import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    selector:'app-header',
    templateUrl:'header.component.html'
})
export class HeaderComponent{

    @Output() featureEmitted = new EventEmitter<string>()

    onItemClicked(feature:string){

        this.featureEmitted.emit(feature);
    }

}