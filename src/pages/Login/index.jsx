import React, { useState, useEffect } from 'react'
import { Card, Input, Button, Spin } from 'antd'
import { KeyOutlined, UserAddOutlined } from '@ant-design/icons'
import './style.less'

const Login = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setInLoading] = useState(false)


    const checkLogin = () => {
        setInLoading(true)
        setTimeout(() => {
            setInLoading(false)

        }, 1000);

    }


    return (
        <div className="login-page">
            <Spin tip="Loading..." spinning={isLoading}>
                <Card title="wxq blog" bordered={true} style={{ width: '400' }}>
                    <Input
                        size="large"
                        placeholder="Enter your userName"
                        prefix={<UserAddOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                        onChange={e => setUserName(e.target.value)}
                    />
                    <br></br>
                    <Input.Password
                        id="password"
                        size="large"
                        placeholder="Enter your password"
                        prefix={<KeyOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <br></br>
                    <Button type="primary" size="large" block onClick={checkLogin}>Login in</Button>
                </Card>


            </Spin>

        </div>
    )
}

export default Login
