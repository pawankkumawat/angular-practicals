import { Component, OnInit } from '@angular/core';
import { switchMap, tap } from 'rxjs/operators';
import { District } from 'src/app/constants/constant';
import { State } from 'src/app/models/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-category',
  templateUrl: './search-category.component.html',
  styleUrls: ['./search-category.component.scss']
})
export class SearchCategoryComponent implements OnInit {

  constructor(private service: DataService) { }
  districts!: District[];

  ngOnInit(): void {
    // this.service.getStateById(1).subscribe(
    //   (state) => {
    //     console.log(state);
    //     this.service.getDistrictsByStateId(state.id).subscribe((resp)=>{
    //       this.districts = resp;
    //       console.log(resp);
    //     });
    //   }
    // )

    this.service.getStateById(1).pipe(
      tap((state:State)=>console.log(state)),
      switchMap((state:State)=>this.service.getDistrictsByStateId(state.id)),
      tap((districts:District[])=>{
        console.log(districts);
        this.districts = districts;
      }),
    ).subscribe()

  }

  

}



































// filterStates(target: EventTarget | null) {
//   const searchInputElement = target as HTMLInputElement;
//   const searchText = searchInputElement.value;
//   if (searchText === '' || searchText === undefined || searchText === null)
//     return this.states = this.statesOriginal ;
//   return this.states = [...this.statesOriginal.filter(state => state.text.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))]
// }