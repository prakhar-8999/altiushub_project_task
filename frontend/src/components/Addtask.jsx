import {Button, Form, Input, message} from "antd";
import instance from "../axios";

const Addtask = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    instance
      .post("auth/addTask", values)
      .then((res) => {
        message.success(res.data.msg);
        form.resetFields();
      })
      .catch((err) => console.log(err));
  };

  const onFinishFailed = (error) => {
    console.log(error);
  };

  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create Task
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
                  label="Task Name"
                  name="task"
                  rules={[
                    {
                      required: true,
                      message: "Please input task!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <div className="flex justify-center">
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Add Task
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Addtask;
