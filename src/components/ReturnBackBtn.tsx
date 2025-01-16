"use client";

import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useRouter } from "next/navigation";

function ReturnBackBtn({ style }: { style?: React.CSSProperties }) {
  const router = useRouter();
  return (
    <Button
      size={"small"}
      onClick={() => router.back()}
      style={{
        padding: "0 8px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderImage: "var(--border-gradient)",
        borderRadius: "100%",
        ...style,
      }}
    >
      <ArrowLeftOutlined color="red" />
    </Button>
  );
}

export default ReturnBackBtn;
