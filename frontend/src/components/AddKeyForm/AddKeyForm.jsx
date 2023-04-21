import React, { useState } from 'react';

function AddKeyForm() {
  const [data, setData] = useState();

  const HandleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const HandleSumbit = (event) => {
    console.log(data);

    event.preventDefault();
  };

  return (
    <div>
      <h1>Just to check form</h1>

      <form onSubmit={HandleSumbit}>
        <div>
          <input type="text" name="firstname" onChange={HandleChange} />
        </div>
        <div>
          <input type="checkbox" name="IsOk" />
        </div>
        <div>
          <input type="text" name="Lastname" onChange={HandleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddKeyForm;
