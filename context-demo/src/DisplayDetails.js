import React, {useContext, useState} from 'react';
import MyContext from './MyContext';
import './App.css';

const DisplayDetails = () => {
  const {
    firstName,
    lastName,
    profession,
    randomFunc,
  } = useContext(MyContext);

  const [myNumber, setMyNumber] = useState(0);

  const handleUpdateNumber = () => {
    setMyNumber(randomFunc(100));
  }

  return (
    <div className="display-details">
      <div className="wrapper">
        <div className="my-data">
          <div>{`${firstName} ${lastName}`}</div>
          <div>{profession}</div>
          <div className="my-number">{myNumber > 0 && myNumber}</div>
        </div>
        <button onClick={() => handleUpdateNumber()} className="my-button">Random number</button>
      </div>
    </div>
  );
}
export { DisplayDetails }
export default DisplayDetails;