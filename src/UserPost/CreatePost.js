import { Button, Card, Input, Space } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const CreatePost = () =>
{
    const [values, setValues] = useState({ title: '', body: '' })
    const [showPost, setShowPost] = useState(false)

    const dispatch = useDispatch()

    const { title, body } = values

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Create Post</h1>
                <Input
                    type="text"
                    placeholder='Enter Title'
                    onChange={(e) => setValues({ ...values, title: e.target.value })}
                    value={title}
                    style={{ width: '400px' }}
                />
                <br />
                <br />
                <Input.TextArea

                />
            </form>
        </div>
    )
}

export default CreatePost