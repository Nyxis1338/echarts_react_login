import React  from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            navigate('/Dashboard'); // Redirect to the dashboard on successful login
        } else {
            alert('Login failed. Please check your username and password.');
        }
    }  
    
    return (
        <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
          <Card title="登录" style={{ width: 300 }}>
            <Form name="login" onFinish={handleLogin}>
    
              <Form.Item
                name="username"
                rules={[{ required: true, message: '请输入用户名!' }]}
              >
                <Input placeholder="用户名" value={username} onChange={(e) => setUsername(e.target.value)} />
    
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入密码!' }]}
              >
                <Input.Password placeholder="密码" value={password} onChange={(e) => setPassword(e.target.value)} />  
    
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" onClick={handleLogin}>
    
                  登录
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
    );


}

export default Login;
