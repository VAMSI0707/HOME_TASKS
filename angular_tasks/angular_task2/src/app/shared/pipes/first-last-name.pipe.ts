import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFullName',
  pure: true,
})
export class UserFullNamePipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    return `${value} ${args[0]}`;
  }
}
