import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',// THE APP-CONTROL SELECTOR - THIS IS ALSO THE HOST ELEMENT - WHICH CAN BE TARGETED BY CSS
  //BY USING THE :host SELECTOR
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None // we  need to disable the scope of the css. So 
                                        //we need to scope the css of this component globally to account for the content projected markup
                                        
                                        
})
export class ControlComponent {
label = input.required<string>();
}
