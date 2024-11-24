import { Component, ElementRef, HostBinding, HostListener, inject } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
  host : {
    class: 'appTicketBindedByHost',
    '(click)': 'onClickEventMethodByHost()' //executes the onClickEventMethodByHost (THIS WONT WORK UNLESS TO COMMENT OUT HOSTlISTENER)
  }
})
export class TicketsComponent {

  tickets:Ticket[] = [];
  
  private el = inject(ElementRef);// You can also target the host element programmatically, if you need access to the DOM


   //If you want to add and class to the host element <app-tickets> you can do it with
   @HostBinding('class') className = 'appTicket'; //it also allow you to define the class as an optional string
   //@HostBinding exists because this WAS the only way to set properties on  host elements before 

   onClickEventMethodByHost(){
      console.log('clicked by host');
   }

   //You can also assign an event handler to the host element
   @HostListener('click') onHostListenerMethod() {
    console.log('clicked by host listener');
    console.log(this.el.nativeElement);
    
   }

   onAddTicket(ticketData: {title:string; text:string}){
     const ticket:Ticket = {
                            id: Math.random(), 
                            title: ticketData.title, 
                            request: ticketData.text, 
                            status: 'open'
                          };

     this.tickets.push(ticket);
   }

}
