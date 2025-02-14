import { Pipe, PipeTransform } from '@angular/core';
import { State } from '../models/models';

@Pipe({
    name: 'state',
    standalone: false
})
export class StatePipe implements PipeTransform {

  transform(value: State[], ...args: string[]): State[] {

   return [...value.filter(state => state.text.toLocaleLowerCase().includes(args[0].toLocaleLowerCase()))]
  }

}
