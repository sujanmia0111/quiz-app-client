import React from 'react'
import { useContext } from "react";
import UserRoute from '../../Components/routes/UserRoute'
import { UserContext } from "../../context";


const User = () => {
  const [state, setState] = useContext(UserContext);
  // state
 

  return (
    <>
      <div className="container-fluid">
        <div className="row py-5">
          <div className="col text-center">
            {/* <h1>Newsfeed</h1> */}
          </div>
        </div>

      </div>
    </>
  );
};

export default User