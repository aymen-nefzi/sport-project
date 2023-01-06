import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch:string,tab:any):any {
    
    tab=""
    var v=["a","e","u","i","o","y"]
    for (let i = 0; i < ch.length; i++) {
      var test=false
      for (let j = 0; j < v.length; j++) {
        if (ch[i].toUpperCase()==v[j].toUpperCase()) {
          test=true
        }
      }if (test) {
        tab+="*"
      }else{
        tab+=ch[i]
      }
    }  
    console.log(tab); 
    }   
  } 


