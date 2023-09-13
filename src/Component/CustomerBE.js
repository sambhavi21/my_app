var arrCus=[];
export function custmeradd(id,name,address,mobileno){
var cus={id:id,name:name,address:address,mobileno:mobileno};
arrCus.push(cus)
return [...arrCus];
}
export function custmersearch(id){
    for(var cus of arrCus){
        if(cus.id==id){
          return cus;
        }
    }
    return undefined;
}
export function custmerdelete(id){
for(var i=0;i<arrCus.length;i++){
    if(arrCus[i].id==id){
         arrCus.splice(i,1);
        return [...arrCus];
    }
}
return undefined;
}
export function custmermodify(id,name,address,mobileno){
for(var cus of arrCus){
    if(cus.id==id){
        cus.name=name;
        cus.address=address;
        cus.mobileno=mobileno;
        return[...arrCus];
    }

}
return undefined;
}