import { Progress, Carousel } from 'antd';
import { React, useState } from 'react';
import { Button, Checkbox, Form, Input, notification } from 'antd';
// import axios from 'axios';
import { saveStringLocal } from '../../utils/config';
import { history } from '../../utils/history';

import { useDispatch } from 'react-redux';
import { callLogin } from '../../redux/reducers/userReducer';
import { USER_LOGIN } from "../../utils/constant.js";

export default function DemoLogin() {
    let isLogin = localStorage.getItem(USER_LOGIN);
    let [reset, setReset] = useState(0);
    let dispatch = useDispatch();
    const onFinish = async (values) => {

        try {
            let { taiKhoan, matKhau } = values;
            //dispatch redux thunk
            const result = await dispatch(callLogin({ taiKhoan, matKhau }));
            console.log(result)
            if (result.isError === true) {
                openNotificationWithIcon(result.message);
            }
        } catch (error) {

        }

    };

    //Notification Login antd function
    const openNotificationWithIcon = (message) => {
        notification['error']({
            message: 'Thông báo!',
            description: message,
        });
    };
    return (
        <div className="container mt-5 text-left">
            <div className="row">
                <div className="col-12">
                    <h1 className='text-info'>Đăng Nhập Hệ Thống</h1>

                    {isLogin ?
                        <button className='btn btn-danger'
                            onClick={() => {
                                localStorage.removeItem(USER_LOGIN);
                                setReset(reset + 1)
                            }
                            }>Logout</button>
                        :
                        <Form
                            name="basic"
                            labelCol={{
                                span: 4,
                            }}
                            wrapperCol={{
                                span: 8,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Tài khoản"
                                name="taiKhoan"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập tài khoản!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Mật khẩu"
                                name="matKhau"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập mật khẩu!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    offset: 4,
                                    span: 8,
                                }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    }
                </div>
            </div>
        </div>
    )
}
