import { AfterViewInit, Component,DestroyRef, effect, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.signalcomponent.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, AfterViewInit, OnDestroy {

constructor() {

  effect(() => {
    console.log(this.currentStatus())
  });
  //allows for subcription for watch for changes, and cleans itself
  //alows you to run code when signal values change

    
  console.log(this.currentStatus()); //only displays once becasue there is no subscription to the stream
}

  currentStatus = signal<'online' | 'offline' | 'unknown' >('online'); // signal defaults as 'online' but could be any of the specified
                                                                      // types in the <generic> parameter

  //the use of private in  angular means that we dont need it in the template
  private interval?: ReturnType<typeof setInterval>;

  //Modern way of cleanup
 //private destroyRef = inject(DestroyRef);

  ngOnInit() { 
   const interval =  setInterval(() => {
      const rnd = Math.random();
      if(rnd <0.5){ 
        this.currentStatus.set('online');
      }else if(rnd < 0.9){
        this.currentStatus.set('offline');
      }else{
        this.currentStatus.set('unknown');
      }
    },5000);

    /*this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    })*/
  }

  ngAfterViewInit() {
    console.log('after view init');
  }

  ngOnDestroy() {
    clearTimeout(this.interval);
  }

}
