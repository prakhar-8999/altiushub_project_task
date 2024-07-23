import {Button, Form, Input, InputNumber, message} from "antd";
import instance from "../axios";

const Register = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    instance
      .post("auth/register", values)
      .then((res) => {
        message.success(res.data.msg);
        form.resetFields();
      })
      .catch((err) => {
        if (err.response.status === 409) {
          message.error(err.response.data.msg);
        }
      });
  };

  const onFinishFailed = (error) => {
    console.log(error);
  };
  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold"
          ></a>
          <div className="w-full bg-white rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create an account
              </h1>
              <Form
                name="basic"
                layout="vertical"
                form={form}
                style={{
                  maxWidth: 600,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your name!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Age"
                  name="age"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Age!",
                    },
                  ]}
                >
                  <InputNumber className="w-full" />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "Please input your email!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <div className="flex justify-center">
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Register
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </div>
            <p className="mb-16 text-center text-sm text-gray-500">
              Already registerd ?&nbsp;
              <a
                href="/"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Login Here
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
