import React from 'react';
import {Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Block, Button} from "../../../components";
import {Link} from "react-router-dom";

const LoginForm = () => {
    return (
        <div>
            <div className="auth__top">
                <h2>Войти в аккаунт</h2>
                <p>Пожалуйста, войдите в свой аккаунт</p>
            </div>
            <Block>
                <div className="form">
                    <Input size="large" className="auth__input" placeholder="Логин" prefix={<UserOutlined/>}/>
                    <Input size="large" className="auth__input" placeholder="Пароль" type='password' prefix={<LockOutlined/>}/>
                    <Button
                        type="primary"
                        size="large"
                    >
                        Войти
                    </Button>
                    <Link to="/register" className="reg--href">Зарегистрироваться</Link>
                </div>
            </Block>

        </div>

    );
};

export default LoginForm;