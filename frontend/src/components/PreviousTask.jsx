import {Table} from "antd";
import {useEffect, useState} from "react";
import instance from "../axios";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Task",
    dataIndex: "task",
    key: "task",
  },
  {
    title: "Task Status",
    dataIndex: "task_status",
    key: "task_status",
  },
];

const Previoustask = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    instance
      .get("auth/getAllTask")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>
        <Table dataSource={data} columns={columns} />;
      </div>
    </>
  );
};

export default Previoustask;
