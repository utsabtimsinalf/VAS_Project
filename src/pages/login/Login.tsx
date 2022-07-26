import { Button, Checkbox, Form, Input } from 'antd'
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginContext, ContextInterface } from '../../contexts';

/**
 * Renders Login Page
 * Once Login Completed Moves to Dashboard
 * @param param0 
 * @returns 
 */

export function Login() {
    const { setIsUserLoggedIn } = useContext(loginContext) as ContextInterface;
    const navigate = useNavigate();

    const onFinish = (values: any) => {
        console.log('Success:', values);
        setIsUserLoggedIn(true);
        navigate({ pathname: "/" });
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <Form
            className='center'
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="unchecked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}