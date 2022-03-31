import React, { useState } from 'react'
import Form from '../Form'
import Output from '../Output'

const Home = () => {
  const [addFname, setAddFname] = useState("")
  const [lname, setLname] = useState("")

  const handleFormChange = (inputValue) => {
    setAddFname(inputValue)
    console.log(addFname)
  }

  const handleFormSubmit = () => {
    fetch("/api/search", {
      method: "POST",
      body: JSON.stringify({
        content:addFname
      }),
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(response => response.json())
    .then(
      message => {console.log(message.content)
      setAddFname("")
      getSearchResult(message.content)
    })
  }

  const getSearchResult = (content) => {
    fetch("/api/" + content).then(response => {
      if(response.ok) {
        return response.json()
      }
    })
    .then(
      data => {console.log(" data.content: " + data.content)
        setLname(data.content)
    })
  }

  return (
    <>
      <h5>HW 6</h5>
      <p>Jin Lee</p>
      <Form 
        userInput={addFname} 
        onFormChange={handleFormChange}
        onFormSubmit={handleFormSubmit}  
      />
      <Output lname={lname}/>
    </>
  )
}

export default Home