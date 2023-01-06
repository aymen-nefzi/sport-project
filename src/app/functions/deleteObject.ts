export function deleteobject(id,key){
    var pos:number;
    var objects=JSON.parse(localStorage.getItem(key)||"[]");
    for (let i = 0; i < objects.length; i++) {
     if (id==objects[i].id) {
      pos=i;
      break ;
     }
      
    }
    objects.splice(pos,1);
    localStorage.setItem(key,JSON.stringify(objects))
    
    
  }