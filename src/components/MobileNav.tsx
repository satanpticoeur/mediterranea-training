import {
  HomeOutlined,
  SearchOutlined,
  PoweroffOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Flex } from "antd";

function MobileNav() {
  return (
    <Flex justify="space-between" align="center" >
      <HomeOutlined style={{ fontSize: 24 }}/>
      <SearchOutlined style={{ fontSize: 24 }}/>
      <ShoppingCartOutlined style={{ fontSize: 24 }}/>
      <PoweroffOutlined style={{ fontSize: 24 }}/>
    </Flex>
  );
}

export default MobileNav;
