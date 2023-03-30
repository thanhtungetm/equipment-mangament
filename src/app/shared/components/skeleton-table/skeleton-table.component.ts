import { Component, Input } from '@angular/core';

@Component({
  selector: '[skeletonTable]',
  templateUrl: './skeleton-table.component.html',
  styleUrls: ['./skeleton-table.component.scss']
})
export class SkeletonTableComponent {
  @Input() skeletonCol : number = 1
  @Input() skeletonRow : number = 1

  colArr: number[] = []
  rowArr: number[] = []

  ngOnInit(){
    this.colArr = new Array(this.skeletonCol)
    this.rowArr = new Array(this.skeletonRow)
  }
}
