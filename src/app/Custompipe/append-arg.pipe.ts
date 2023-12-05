import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendArg'
})
export class AppendArgPipe implements PipeTransform {

  transform(value: string,length:number): unknown {
    //Default value if length is not set
    if(!length){
      length=50;
    }
    return value.substring(0,length);
  }

}
