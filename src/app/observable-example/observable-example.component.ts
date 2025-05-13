import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { catchError, filter, from, interval, map, merge, mergeAll, mergeMap, Observable, of, retry, take } from 'rxjs';

@Component({
  selector: 'app-observable-example',
  imports: [CommonModule],
  templateUrl: './observable-example.component.html',
  styleUrl: './observable-example.component.css'
})
export class ObservableExampleComponent {

  data: any[] = [];


  observable1 = new Observable((observer) => {

    setTimeout(() => { observer.next(12); }, 1000)
    setTimeout(() => { observer.next(14); }, 2000)
    setTimeout(() => { observer.next(15); }, 3000)

    setTimeout(() => {
      observer.error(new Error("Something went wrong"))
    }, 3500)

    setTimeout(() => { observer.next(16); }, 4000)

    setTimeout(() => { observer.complete(); }, 5000)

    setTimeout(() => { observer.next(100); }, 6000)
    setTimeout(() => { observer.next(200); }, 7000)



    // observer.next(12);
    // observer.next(56);
    // observer.next(200);
  })

  getData1() {
    this.observable1.subscribe({
      next: (value) => {
        console.log("Value", value);
        this.data.push(value);
      },
      complete: () => { alert("Data Successfully fetched") },
      error: (error) => {
        console.log(error.message)
        alert(error.message)
      }
    })
  }


  // of(12,56,34,23)

  observable2 = of([12, 67, 34], "A", "B")
  getData2() {
    this.observable2.subscribe(
      {
        next: (value) => {
          this.data.push(value);
        },
        complete: () => {
          console.log("data fetched Successfully")
        }
      }
    )
  }

  // .subscribe({
  //   next:(value)=>{},
  //   complete:()=>{}
  // }
  getData3() {
    from("Rohit")
      .subscribe({
        next: (value) => {
          this.data.push(value)
        },
        complete: () => {
          alert("Data fetched Succssfully")
        }
      })
  }

  observable4 = interval(2000)
  observable_subscription: any;
  getData4() {
    this.observable_subscription = this.observable4
      .subscribe({
        next: (value) => {
          this.data.push(value)
        }
      })
  }


  stop() {
    this.observable_subscription.unsubscribe();
  }

  getData5() {
    //pipe
    interval(500)
      .pipe(
        take(4)
      ).subscribe(
        {
          next: (value) => { this.data.push(value) }
        }
      )
  }


  getData6() {
    //pipe
    interval(500)
      .pipe(
        map((value) => {
          return value
        }),
        take(5)
      ).subscribe(
        {
          next: (value) => { this.data.push(value) }
        }
      )
  }


  getData7() {
    let students = [
      { id: 101, name: "Nisha" },
      { id: 102, name: "Anisha" },
    ]

    from(students)
      .pipe(
        map(student => student.name)
      )
      .subscribe({
        next: (value) => this.data.push(value)
      }
      )
  }


  getData8() {
    of(12, 45, 78, 23, 90, 23)
      .pipe(
        filter((value) => value % 2 == 0),
        map(value => value + " = " + (value * value)),
        take(2)
      ).subscribe({
        next: (value) => { this.data.push(value) }
      })
  }

  getData9() {
    merge(interval(100), interval(3000))
      .subscribe({
        next: (value) => { this.data.push(value) }
      })
  }

  getData10() {
    of(12, 56, 78, 90, 34, 34)
      .pipe(
        mergeMap((value) => of(value)),
      )
      .subscribe({
        next: (value) => {
          this.data.push(value)
        }
      })
  }


  getData11() {
    interval(500)
      .pipe(
        map((value) => {
          if (value == 3)
            throw new Error("Something went wrong")
          return value;

        }),
        retry(1),
        catchError((error) => {
          console.log(error.message);
          return interval(100)
        })
      ).subscribe({
        next: (value) => console.log(value)
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
