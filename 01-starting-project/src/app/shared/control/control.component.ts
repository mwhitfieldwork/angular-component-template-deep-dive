import { AfterContentInit, afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',// THE APP-CONTROL SELECTOR - THIS IS ALSO THE HOST ELEMENT - WHICH CAN BE TARGETED BY CSS
  //BY USING THE :host SELECTOR
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // we  need to disable the scope of the css. So 
                                        //we need to scope the css of this component globally to account for the content projected markup

  host:{ 
    class:'control',
    '(click)':'onclick()'
  }//automatically puts the <app-control> element a class="control" so that you dont have to 
  //add a class of control to the <app-control> element whereever it is used. Short cut    
})



export class ControlComponent implements AfterContentInit {
label = input.required<string>();


constructor() {
  afterRender(() => {
    //called if anything changes in the angular app ( over and over)
  })

  afterNextRender(() => {
    // (called only once ) and after the next change in the angular app
  })
}

//private control = contentChild<ElementRef<HTMLInputElement|HTMLTextAreaElement>>('input') 
//Tell typescript which types will be in the signal

@ContentChild('input') private control?:ElementRef<HTMLInputElement|HTMLTextAreaElement> 
//in order to gain access to the DOM elements that are PROJECTED into the view
// the 'input is the template var on both the textearea and the input elements.
// Therefore both kinds of DOM elements needs to be specified in the <generic> part of the ContentChild

//ContentChild is used instead of ContentChildren because when the template-read dom elements are accessed,
//there will be only one instance of either the textarea or the input element 

ngAfterContentInit(): void {
  // the content child is available here but not in the ngOnInit method
}

onclick() {
  console.log('clicked');
  console.log(this.control);
  //console.log(this.control()); // as a signal
}
}
