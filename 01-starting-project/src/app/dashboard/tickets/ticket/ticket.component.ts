import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
data = input.required<Ticket>()
detailsVisible = signal(false);
//detailsVisible = false; //this works too

close = output();

onToggleDetails() {
  //this.detailsVisible.set(!this.detailsVisible()); //using set does not establish a subscription,
  //that only happens in the effect
  this.detailsVisible.update((value) => !value);
}

onMarkAsCompleted() {
  this.close.emit(); //trigger an event to the parent class without any data
}
}
