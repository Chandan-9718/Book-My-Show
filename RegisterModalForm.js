

// import { SmileOutlined, UserOutlined } from '@ant-design/icons';
import {  Form, Input, Modal, Select } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios'
import '../MainNavbar/MainNavbar.css';
import './RegisterModalForm.css'
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
// reset form fields when modal is form, closed
const useResetFormOnCloseModal = ({ form, open }) => {
  const prevOpenRef = useRef();
  useEffect(() => {
    prevOpenRef.current = open;
  }, [open]);
  const prevOpen = prevOpenRef.current;
  useEffect(() => {
    if (!open && prevOpen) {
      form.resetFields();
    }
  }, [form, prevOpen, open]);
};


const ModalForm = ({ open, onCancel }) => {
  const [form] = Form.useForm();
  useResetFormOnCloseModal({
    form,
    open,
  });
  const onOk = () => {
    form.submit();
  };
  return (
    <Modal title="Login Form" open={open} onOk={onOk} onCancel={onCancel}>
      <Form form={form} layout="vertical" name="userForm">
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="role"
          label="Role"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            allowClear style={{ width: '350px' }} 
            placeholder="Select Role" 
            options={[{value:"admin", label:'admin'},{value:"user", label:"user"}]}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};
const RegisterModalForm = ({setUser, nav}) => {

    const [formErrors, setFormErrors] = useState({});
    const validateForm = (values) => {
        const error = {};
        const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            error.email = "Email is required";
        } else if (!regex.test(values.email)) {
            error.email = "Please enter a valid email address";
        }
        if (values.password.length < 8) {
            error.password = "Password should be longer";
        }
        return error;
    };
    function registerUser(user){
      const fetchData = async()=>{
        try{
          const response = await axios.post("/user", user)
          // const data = response.data;
          // console.log("Theater Data " ,response);
          if(response.status === 200){
              alert(` Hii ${response.data.firstName}, Welcome to BookMyShow !`);
              loginUser({email: user.email, password: user.password})
          }
          // .then(response => response.json())
        }
        catch(err){
          alert("Failed")
        }
      }
      fetchData();
    }
    function loginUser(user) {
        console.log(user);
        var bodyFormData = new FormData();
        bodyFormData.append('username', user.email);
        bodyFormData.append('password', user.password);
        var myHeader = new Headers();
        myHeader.append('content-type', 'multipart/form-data');
        console.log(user);
        axios({
          method: "post",
          url: "/login",
          data: bodyFormData,
          headers: myHeader,
        })
        .then((response)=>{
          console.log(response);
          if(response.status === 200){
            axios.get(`/user/email?email=${user.email}`)
            .then((response)=>{
              setUser(response.data.firstName);
              console.log(response.data.firstName);
              if(response.data.role === "admin"){
                nav('/admin')
              }
            })
            console.log("working");
            setOpen(false);
          }
        });
    }

    const [open, setOpen] = useState(false);
    const showUserModal = () => {
        setOpen(true);
    };
    const hideUserModal = () => {
        setOpen(false);
    };
    return (
    <Form.Provider
      onFormFinish={(name, { values }) => {
        if (name === 'userForm') {
            setFormErrors(validateForm(values))
            registerUser(values)
            loginUser(values)
        }
      }}
    >
    <button onClick={showUserModal} className="signUp">Sign-Up</button>
      {/* <Form {...layout} name="basicForm" onFinish={onFinish}>
        <Form.Item {...tailLayout}>
          <Button
            htmlType="button"
            style={{
              margin: '0 8px',
            }}
            onClick={showUserModal}
          >
            Add Actor
          </Button>
          <button onClick={showUserModal} className="signIn">Sign-in</button>
        </Form.Item>
      </Form> */}

      <ModalForm open={open} onCancel={hideUserModal} />
    </Form.Provider>
  );
};
export default RegisterModalForm;