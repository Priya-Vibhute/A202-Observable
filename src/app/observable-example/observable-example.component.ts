import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-example',
  imports: [CommonModule],
  templateUrl: './observable-example.component.html',
  styleUrl: './observable-example.component.css'
})
export class ObservableExampleComponent {

  data:any[]=[];
  

  observable1=new Observable((observer)=>{

    setTimeout(()=>{observer.next(12);},1000)
    setTimeout(()=>{observer.next(14);},2000)
    setTimeout(()=>{observer.next(15);},3000)
    setTimeout(()=>{observer.next(16);},4000)
    
    setTimeout(()=>{observer.complete();},5000)

    setTimeout(()=>{observer.next(100);},6000)
    setTimeout(()=>{observer.next(200);},7000)



    // observer.next(12);
    // observer.next(56);
    // observer.next(200);
  })

  getData1()
  {
    this.observable1.subscribe({
      next:(value)=>{
        console.log("Value",value);
        this.data.push(value);
      },
      complete:()=>{alert("Data Successfully fetched")}
    })
  }


  /*

  .subscribe({
       next:(value)=>{
       },
       error:(error)=>{},
       complete:()=>{
       }
  })

  */

}
