import React, { useState, useEffect } from 'react'
import { Card, Input, Button, Spin, message } from 'antd'
import { KeyOutlined, UserAddOutlined } from '@ant-design/icons'
import './style.less'
import api from "@services"

const Login = (props) => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setInLoading] = useState(false)


    const checkLogin = () => {
        setInLoading(true)
        // setTimeout(() => {
        //     setInLoading(false)

        // }, 1000);
        if (!userName) {
            message.error('用户名不能为空')
            setTimeout(() => {
                setInLoading(false)
            }, 500)
            return false
        } else if (!password) {
            message.error('密码不能为空')
            setTimeout(() => {
                setInLoading(false)
            }, 500)
            return false
        }

        api.login.checkLogin({
            userName,
            password
        }).then(res => {
            console.log(res)
            setInLoading(false)
            if (res.data == '登录成功') {
                localStorage.setItem('openId', res.data.openId)
                message.success('欢迎回来，我的主人')
                setTimeout(() => {
                    props.history.push('/index')
                }, 1000);


            } else {
                message.error('用户名密码错误')
            }
        })

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
