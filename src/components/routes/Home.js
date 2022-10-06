import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    const [blogs, setBlogs] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    // console.log('server url', process.env.REACT_APP_SERVER_URL)
    useEffect(() => {
        const getBlogs = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/blog`)
                console.log(response.data)
                setBlogs(response.data)


            } catch(err) {
                console.warn(err)
                if (err.response) {
                    setErrorMessage(err.response.data.message)
                }
            }
        }
        getBlogs()
    }, [])

    const blogLinks = blogs.map(blog => {
        console.log(blog.title)
        return (
            <div key={blog._id}>
                <Link to={`/blogs/${blog._id}`}>{blog.title}</Link>
            </div>
        )
    })

    return (
        <div>
            <h1>Welcome to your favorite blogosphere!</h1>

            <h2>Below are some of our most recent blog posts:</h2>

            {blogLinks}

            <p>{errorMessage}</p>
        </div>
    )
}