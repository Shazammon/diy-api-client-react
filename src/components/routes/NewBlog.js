import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function NewBlog() {
    const [form, setForm] = useState({
        name: '',
        title: '',
        content: ''
    })
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async e => {
        try {
            e.preventDefault()
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/blog`, form)
            navigate('/blogs')

        } catch(err) {
            console.warn(err)
            if (err.response) {
                setErrorMessage(err.response.data.message) 
            }
        }
    }



    return (
        <div>
            <h1>Create a new blog post</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Your Name:</label>
                    <input 
                        type='text'
                        placeholder='enter your name...'
                        id='name'
                        value={form.name}
                        onChange={e => setForm({...form, name: e.target.value })}
                    />
                </div>

                <div>
                    <label htmlFor='title'>Title:</label>
                    <input 
                        type='text'
                        id='title'
                        value={form.title}
                        placeholder='enter blog title...'
                        onChange={e => setForm({...form, title: e.target.value })}
                    />
                </div>

                <div>
                    <label htmlFor='content'>Blog Content:</label>
                    <input 
                        type='text'
                        id='content'
                        value={form.content}
                        placeholder='enter blog content...'
                        onChange={e => setForm({...form, content: e.target.value })}
                    />
                </div>
                <button type='submit'>Create Blog</button>
            </form>
        </div>
    )
}