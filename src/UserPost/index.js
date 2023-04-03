import { Button, Card, Input, Space } from 'antd'
import React, { useEffect, useState } from 'react'


const UserPost = () =>
{
    const [id, setId] = useState()

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
        </div>
    )
}

export default UserPost