import { Button, Modal, Form, Input } from 'antd';
import { useState } from 'react';

const AddUser = ({ setUsers }) => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setVisible(true)
  }

  const handleSubmit = (value) => {
    if (value.userName) {
      setUsers((prevState) => [...prevState, { userName: value.userName }])
      form.resetFields()
    }
  }

  const handleCancel = () => {
    setVisible(false)
    form.resetFields()
  }

  const onOk = () => {
    form.submit()
    setVisible(false)
  }

  return (
    <>
      <Button onClick={showModal}>Add user</Button>
      <Modal title="Add user" visible={visible} onOk={onOk} onCancel={handleCancel}>
        <Form
          form={form}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={handleSubmit}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="userName"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default AddUser

