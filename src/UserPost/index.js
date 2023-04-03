import { Button, Card, Input, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getPost } from '../redux/features/postSlice'
import LoadingCard from './LoadingCard'


const UserPost = () =>
{
    const [id, setId] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loading, post } = useSelector((state) => ({ ...state.app }))

    const fetchUserPostsHandler = () =>
    {
        if (!id)
        {
            window.alert("Please Provide an Id")
        }
        else
        {
            dispatch(getPost({ id }))
            setId("")
        }
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
            <br />
            {
                loading
                    ? (
                        <LoadingCard count={1} />
                    ) : (
                        {
                            post.length > 0 &&
                                (<div className="site-card-border-less-wrapper">
                                    <Card
                                        type='inner'
                                        title={post[0].title}
                                    >
                                        <p>User Id: {post[0].id}</p>
                                    </Card>
                                </div>)
                        }

                    )
            }
        </div>
    )
}

export default UserPost