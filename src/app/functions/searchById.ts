export function searchById(id,key) {
    var objects=JSON.parse(localStorage.getItem(key)||"[]")
    var object:any
    
    
    for (let i = 0; i < objects.length; i++) {
       if (objects[i].id==id) {
        object=objects[i]
        break
       }
        
    }
    return object 
    
}