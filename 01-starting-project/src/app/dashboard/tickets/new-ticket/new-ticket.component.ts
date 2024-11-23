import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  @ViewChild('form')form?:ElementRef<HTMLFormElement>; //store the value of the template variable  on the var
                                      //Using ElementRef to get access to the DOM. it will be wrapped in the ELementRef
                                      //But ElementRef needs informtation about the dom that it will be wrapping within the  <>
                                      // (you can find out the DOM type by hovering over the #template var in the html file)
                                      //When the dom is initialized, the form will be undefine, so use a question

  //private form = viewChild<ElementRef<HTMLFormElement>>('form'); //this is a new feature of anular 17.
                                      //it is a signal - you can pass a string with a template variable
                                      //It needs the type enforced to you have to include the <HTMLFormElement> as well 
  onSubmit() {
    this.form?.nativeElement.reset();// you can reset the form because it is a HTMLFormElement, not a DOM - but 
                                    // But if you use the nativeElemment you can get access to the reset() and other DOM attributes
    console.dir('submitted', this.form);
    //this.form()?.nativeElement.reset(); //use of the signal version
  }
}
