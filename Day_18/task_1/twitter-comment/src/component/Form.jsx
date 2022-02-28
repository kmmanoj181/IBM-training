import React, { useState } from 'react'

const Form = () => {
    const [data, setData] = useState({
        fname: '',
        age: 0,
        phoneNo: '',
        gender: '',
        state: ''
    });
    //  const handlename=(e)=>{
    //     setData(...data,fname:e.target.value);
    //  };

    const handleClick = (e) => {
        e.preventDefault();
        console.log(data)
    }
    return (
        <>
            <form>
                <ul>
                    <li>
                        {/* <label htmlFor="fname">Name</label> */}
                        <input
                            type="text"
                            placeholder='EnterName'
                            onChange={(e) => setData({ ...data, fname: e.target.value })}
                        />
                    </li>

                    <li>
                        <input type='integer' placeholder='Enter Age' onChange={(e) => setData({ ...data, age: e.target.value })}  ></input>
                    </li>
                    <li>
                        <input type='text' placeholder='Enter Phone number' onChange={(e) => setData({ ...data, phoneNo: e.target.value })} required minLength='10' maxLength='10' ></input>
                    </li>
                    <li>
                        <label htmlFor=''>Gender</label>
                        <br></br>
                        <label htmlFor=''>male</label>
                        <input type='radio' value='male' onChange={(e) => setData({ ...data, gender: e.target.value })} ></input>
                        <br></br>
                        <label htmlFor=''>female</label>
                        <input type='radio' value='female' onChange={(e) => setData({ ...data, gender: e.target.value })} ></input>

                    </li>
                    <li>
                        <label>
                            State
                            <select onChange={(e) => setData({ ...data, state: e.target.value })}>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Goa">Goa</option>
                                <option value="Punjab">Punjab</option>
                            </select>
                        </label>

                    </li>


                </ul> <button onClick={handleClick}>click</button>
            </form>
        </>
    )
}

export default Form