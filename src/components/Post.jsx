import { useEffect, useState } from "react"
import Post-form from "./Post-form"


export const Post = () => {
  const [newThought, setNewThought]
  const url = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"

  const submit = async (event) => {
    event.preventDefault()

    if (newThought.trim.length < 5 && length > 140) {
      alert("Thought must be at least 5 characters long")
      return 
    }
  }

  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    }
    body: JSON.stringify({
      description: newThought
    })
  }
  try {
    const response = await fetch(url, options)
    if (response.ok) {
      await 
      //row 63 in code example
    }
  }

    
  return (
    <div>Submit-form</div>
  )
}









// const handleNewTodoChange = (event) => {
//   setNewTodo(event.target.value)
// }