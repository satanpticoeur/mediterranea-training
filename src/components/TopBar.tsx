import { StarOutlined, UserOutlined } from "@ant-design/icons";
import { Flex } from "antd";

function TopBar() {
  return (
    <Flex justify="space-between" align="center" >
        <UserOutlined style={{ fontSize: 24 }}/>
        <StarOutlined style={{ fontSize: 24 }}/>
    </Flex>
  );
}

export default TopBar;
