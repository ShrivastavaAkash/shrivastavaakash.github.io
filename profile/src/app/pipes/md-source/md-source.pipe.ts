import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mdSource'
})
export class MdSourcePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return "assets/markdowns/" + value + ".md";
  }

}
