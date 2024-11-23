import { Component } from '@angular/core';

@Component({
  selector: 'button.appButton', //Class selector appbutton, THIS IS ALSO THE HOST ELEMENT - WHICH CAN BE TARGETED BY CSS
  //By using the :host selector
  //selector: 'button[appButton]', targets the attribute appButton
  //attribute selector usage, any thing that has this attribute will be replace by this content
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

}
