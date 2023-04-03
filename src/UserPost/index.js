import { Button, Card, Input, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const UserPost = () =>
{
    const [id, setId] = useState()
    const navigate = useNavigate()


    const fetchUserPostsHandler = () =>
    {

    }

    return (
        <div className="container">
            <h1 style={{ textAlign: 'center' }}>Fetch Posts</h1>
            <Input
                placeholder='Enter User Id'
                type='number'
                onChange={(e) => setId(e.target.value)}
                value={id}
                style={{ width: '300px' }}
            />
            <br />
            <br />
            <Space
                size='small'
                style={{ margin: 10 }}
            >
                <Button
                    type='primary'
                    onClick={fetchUserPostsHandler}
                >
                    Fetch User Post
                </Button>
                <Button
                    type='primary'
                    onClick={() => navigate("/createPost")}
                >
                    Create User Post
                </Button>
            </Space>
        </div>
    )
}

export default UserPost