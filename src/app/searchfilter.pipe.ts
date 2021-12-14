import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(value: any[], filterstring: string, proName:string): any[] {
     const result:any = [];
     if(!value || filterstring==='' || proName==='' ){
       return value;
     }
     value.forEach((a:any) => {
       if (a[proName].trim().toLowerCase().includes(filterstring.toLocaleLowerCase())){
         result.push(a);
       }
     });
  return result;
}
}
