import React, { useState } from 'react'
import { custmeradd, custmerdelete, custmermodify, custmersearch } from './CustomerBE';
import Showcustomer from './Showcustomer';

function CustomerMgt(prop) {
    var [id,setId]=useState('0');
    var [name,setName]=useState('');
    var [address,setAddress]=useState('');
    var [mobileno,setMobileno]=useState('');
     var[CusArr,setCusArr]=useState([]);
    function onChangeid(e){
      setId(e.target.value);
    }
    function onChangename(e){
      setName(e.target.value);
    }
    function onChangeaddress(e){
      setAddress(e.target.value);
    }
    function onChangemobileno(e){
      setMobileno(e.target.value);
    }
    function addcustomer(e){
   var arr=custmeradd(id,name,address,mobileno);
   setCusArr(arr);
      alert ('custmer added successfully')
    }
    function searchcustomer(e){
      var cus=custmersearch(id);
      if(cus==undefined){
        alert('customer id not found')
      }
      else{
        setName(cus.name);
        setAddress(cus.address);
        setMobileno(cus.mobileno);
        alert ('custmer found successfully')
      }
      
    }
    function deletecustomer(e){
      var arr=custmerdelete(id);
      if(arr==undefined){
   alert('id not found');
      }
   else{
    setCusArr(arr);
   alert('custmer deleted successfully')
    
   }
      }
     
    
    function modifycustomer(e){
      var arr=custmermodify(id,name,address,mobileno);
      if(arr==undefined){
        alert('id not found')
      }
      else{
        setCusArr(arr);
        alert ('custmer modified successfully')
      }
     
    }
  return (
    <>
      
   
    <div>
      
  
  <center>
    
    <h1>CUSTOMER MANAGEMENT SYSTEM</h1>
  </center>
  
    <div className="col-sm-12 col-xl-6 col-lg-6 col-md-6">
      <label htmlFor="formGroupExampleInput" className="form-label">
        ID:-
      </label>
      <input
        type="text"
        className="form-control"
        id="id"
        placeholder="Enter your id"
        value={id}
        onChange={onChangeid}
      />
    </div>
    <div className="col-sm-12 col-xl-6 col-lg-6 col-md-6">
      <label htmlFor="formGroupExampleInput2" className="form-label">
        Name:-
      </label>
      <input
        type="text"
        className="form-control"
        id="name"
        placeholder=" Enter your name"
        value={name}
        onChange={onChangename}
      />
    </div>
    <div className="col-sm-12 col-xl-6 col-lg-6 col-md-6">
      <label htmlFor="formGroupExampleInput2" className="form-label">
        Address:-
      </label>
      <input
        type="text"
        className="form-control"
        id="address"
        placeholder="Enter your Address"
        value={address}
        onChange={onChangeaddress}

      />
    </div>
    <div className="col-sm-12 col-xl-6 col-lg-6 col-md-6">
      <label htmlFor="formGroupExampleInput2" className="form-label">
        MobileNo:-
      </label>
      <input
        type="text"
        className="form-control"
        id="mobileno"
        placeholder="Enter your MobileNo"
         value={mobileno}
         onChange={onChangemobileno}
      />
    </div>
   
  <center>
    <div>
      <button type="button" className="btn-btn-primary" onClick={addcustomer}>
        Add
      </button>
      <button type="button" className="btn-btn-primary" onClick={searchcustomer}>
        Search
      </button>
      <button type="button" className="btn-btn-primary" onClick={deletecustomer}>
        Delete
      </button>
      <button type="button" className="btn-btn-primary" onClick={modifycustomer}>
        Modify
      </button>
    </div>
  </center>
 
<Showcustomer arr={CusArr}/>
    </div>
  )

    </>
  )
  }
export default CustomerMgt