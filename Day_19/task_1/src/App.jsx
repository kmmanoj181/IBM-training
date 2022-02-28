import React,{useState} from 'react';
import Contact from './component/Contact';


const App = () => {

//   const [data, setData] = useState({
//     fname: '',
//     email:'',
//     phoneNo: '',
    
    
// });

  const [fname,setName]=useState("");
  const [ph,setPh]=useState("");
  const[email,setEmail]=useState("");

  const [contact,setContact]=useState([
    {cName:'Adarsh Singh', cPh:'995639222',cEmail:'adafs@gh.com'}
  ]);

  const handleName=(event)=>{
    setName(event.target.value);
  };

  const handlPh=(e)=>{
    setPh(e.target.value);
  };

  const handleEmail=(event)=>{
    setEmail(event.target.value)
  };
 
  const handleSubmit=(e)=>{
    e.preventDefault();
    setContact([...contact,{cName:fname,cPh:ph,cEmail:email}]);
    setEmail("");
    setName("");
    setPh("");
   console.log(contact);
  };

  const handleDel=(id)=>{
    const delData=contact.filter(item=>item.cEmail!=id);
    setContact(delData);

  }

  const handleEdit=(id)=>{
    const editData=[...contact];
    
    const getElementPos=editData.findIndex(i=>i.cEmail===id);
    editData[getElementPos]={cName:fname,cPh:ph,cEmail:email};
    setContact(editData);
    setEmail("");
    setName("");
    setPh("");
  };
   

  return (
    <>
      <div className='container'>

        <div className='card w-50 p-5 ms-auto me-auto mt-5'>

          <form>
            <div className='row g-3'>

              <div className='col-sm-6'>
              <input placeholder='Full Name' className='form-control' value={fname} onChange={handleName} type='text'></input>

              </div>
              <div className='col-sm-6'>
                  <input placeholder='Phone Number' className='form-control' value={ph} onChange={handlPh} type='text' ></input>

              </div>
              <div className='col-sm-12'>
              <input placeholder='Email Id' className='form-control' value={email} onChange={handleEmail} type='email'></input>


              </div>

              

              <button className='btn  btn-primary w-50 ms-auto me-auto' onClick={handleSubmit}>Add Contact</button>
                
              
            </div>

           
          </form>
            

        </div>


      </div>
    
      <Contact data={contact} handleDel={handleDel} handleEdit={handleEdit}></Contact>
    </>
  )
}

export default App