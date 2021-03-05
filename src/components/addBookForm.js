import React,{ useState } from "react"
import axios from "axios"

const initialValues = {
    title:"",
    genre:""
}

const AddBook = () => {
    const [values, setValues] = useState(initialValues)

    const handleChanges = (evt) => {
        setValues({...values,[evt.target.name]: evt.target.value})
    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
        const newBook = {
            title: values.title.trim(),
            genre: values.genre.trim()
        }
        console.log(newBook)
        setValues(initialValues)
        //axios post call
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">
                    Title
                    <input 
                    name="title"
                    type="text"
                    value={values.title}
                    onChange={handleChanges}
                    />
                </label>
                <br/>
                <label htmlFor="genre">
                    Genre
                    <input 
                    name="genre"
                    type="text"
                    value={values.genre}
                    onChange={handleChanges}
                    />
                </label>
                <button>Add</button>
            </form>
        </div>
    )
}


export default AddBook;
