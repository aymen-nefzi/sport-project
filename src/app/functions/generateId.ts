export function generateId(T:any){
    var max: number
    if (T.length==0) {
       max=0
      
    }else {
        max=T[0].id
    for (let i = 0; i < T.length; i++) {
     if (T[i].id>max) {
      max=T[i].id
     }
    }
    }
    return max
  }