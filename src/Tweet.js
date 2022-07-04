import React,{useState} from "react";

import { Card } from "react-bootstrap";



const Tweet = (props) => {



    const [counter, setCounter] =useState(0)

    const increment = () => {
        setCounter (counter+1)
    }

    const decrement = () => {
        setCounter (counter-1)
    }

    const text = props.text
    const author = props.author
    const date  = props.date
     

    return (

        <>
        <div>
              {/* <h3>{text.toLowerCase()}</h3>
              <h4>by {author} on {date}</h4>
              <h3>Value of the counter: {counter}</h3>
              <button onClick={increment}>+</button>
              <button onClick={decrement}>-</button> */}

  
<Card style={{ width: '60rem',margin:'auto' ,marginBottom: '30px' }}>
  <Card.Body>
    <Card.Title>{author}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{date} </Card.Subtitle>
    <Card.Text>
      {text}
    </Card.Text>
 
  </Card.Body>
</Card>


         
        </div>
        </>
    )

}

export default Tweet;