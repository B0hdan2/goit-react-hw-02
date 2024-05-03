import { useState } from "react";
import Alert from "./Alert/Alert";
import ClickCounter from "./ClickCounter/ClickCounter";
import CustomButton from "./CustomButton/CustomButton";
import Mailbox from "./Mailbox/Mailbox";
import Product from "./Product/Product";

export default function App() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(prev => prev + 1);
  };
  const handleClick1 = () => {
    setClicks(prev => prev - 1);
  };



  const [values, setValues] = useState({
    x: 0,
    y: 0,
  });

  const updateX = () => {
    setValues({
      ...values,
      x: values.x + 1
    });
  };
  
  

	const updateY = () => {
    setValues({
      ...values,
      y: values.y + 1
    })
  };


  return (    
    <div>
 <div>
      <p>
        x: {values.x}, y: {values.y}
      </p>

      <button onClick={updateX}>Update x</button>
      <button onClick={updateY}>Update y</button>
    </div>

      <CustomButton />

      <h1>Best selling</h1>

      <Alert variant='info' outlined elevated>
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant='error' outlined>
        There was an error during your last transaction
      </Alert>
      <Alert variant='success' elevated>
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant='warning'>
        Please update your profile contact information
      </Alert>

      <ClickCounter  value={clicks} onUpdate={handleClick} offUpdate={handleClick1} />
      <ClickCounter value={clicks} onUpdate={handleClick} offUpdate={handleClick1} />

      <Product
        name='Tacos With Lime'
        imgUrl='https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640'
        price={10.99}
      />
      <Product
        name='Fries and Burger'
        imgUrl='https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640'
        price={14.29}
      />

      <Mailbox username='Bohdan' unreadMessages='' />
    </div>
  );
}
