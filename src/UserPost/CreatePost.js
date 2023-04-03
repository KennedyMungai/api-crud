import { Button, Card, Input, Space } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const CreatePost = () =>
{
    const [values, setValues] = useState({ title: '', body: '' })
    const [showPost, setShowPost] = useState(false)

    return (
        <div>CreatePost</div>
    )
}

export default CreatePost