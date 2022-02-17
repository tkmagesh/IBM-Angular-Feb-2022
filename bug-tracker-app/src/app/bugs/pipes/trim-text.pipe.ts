import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimText'
})
export class TrimTextPipe implements PipeTransform {

  transform(value: string, maxLength : number = 30): string {
    console.log('trimText.transform triggered')
    return value.length <= maxLength ? value : value.substring(0,maxLength) + '...';
  }

}
