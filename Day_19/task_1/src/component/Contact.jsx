import React from 'react';
import './Contact.css';

const Contact = (props) => {
  return (
   <>
        <div className='contaner p-5 w-75 ms-auto me-auto'>
            <div className='row g-3'>
                {
                    props.data.map(
                        item=>{
                            return(
                                <>
                                <div className='col-sm-12'>

                                    <div className='card w-75 ms-auto me-auto border-success'>
                                        <div className="card-body">
                                            <h4 className='card-title'>
                                                {item.cName}
                                            </h4>
                                        <h6 className='card-subtitle text-muted mb-3'> {item.cPh} </h6>
                                        <a className='card-link' > {item.cEmail}</a>
                                            
                                        </div>
                                        <div className='mt-2 me-2 mb-2 row g-2'>
                                            <button className='btn btn-danger ' onClick={()=>{props.handleDel(item.cEmail)}}>Delete</button>
                                            <button type='button' className='btn btn-success' onClick={()=>{props.handleEdit(item.cEmail)}} >Edit</button>

                                        </div>
                                       
                                    </div>
                                </div>
                                    
                                
                                </>
                            )
                        }
                    )
                }

            </div>
        </div>
        
   </>
  )
}

export default Contact