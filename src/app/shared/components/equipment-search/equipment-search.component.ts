import { Component } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { debounceTime, Subject } from 'rxjs';
import { EquipmentFilterService } from 'src/app/admin/admin-shared/services/equipment-filter.service';


@Component({
  selector: 'app-equipment-search',
  templateUrl: './equipment-search.component.html',
  styleUrls: ['./equipment-search.component.scss']
})
export class EquipmentSearchComponent {

  faTimes = faTimes
  search! : string
  searchInput$ = new Subject()
  

  constructor(private equipmentFilterService: EquipmentFilterService){
    this.searchInput$.pipe(debounceTime(400)).subscribe((input:any) => {
      equipmentFilterService.changeFilter({...this.equipmentFilterService.getFilter(), search: String(input.value)})
    });
  }

  clear(searchInput: HTMLElement){
    console.log("search input el:", searchInput);
    (searchInput as HTMLInputElement).value = ''
    this.searchInput$.next(searchInput)
  }

}
