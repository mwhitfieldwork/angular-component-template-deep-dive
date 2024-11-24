import { AfterViewInit, Component,DestroyRef, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, AfterViewInit, OnDestroy {
  //currentStatus: 'online' | 'offline' | 'unknown' = 'online'; //Without the use of  signals
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';

  //the use of private in  angular means that we dont need it in the template
  private interval?: ReturnType<typeof setInterval>;

  //Modern way of cleanup
 //private destroyRef = inject(DestroyRef);

  ngOnInit() { 
   const interval =  setInterval(() => {
      const rnd = Math.random();
      if(rnd <0.5){ 
        this.currentStatus = 'online';
      }else if(rnd < 0.9){
        this.currentStatus = 'offline';
      }else{
        this.currentStatus = 'unknown';
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
