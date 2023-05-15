import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activeDeletedDesc',
  pure: true,
})
export class ActiveDeletedDescPipe implements PipeTransform {
  transform(value: any) {
    return value ? 'Deleted' : 'Active';
  }
}
