import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrl'
})
export class ImageUrlPipe implements PipeTransform {

  transform(value: string): unknown {
    return 'http://192.168.40.64:5432' +value;
  }

}
