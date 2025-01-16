"use client"

import { Typography } from "antd";
const { Title } = Typography;

function LinearTitle({
  children,
  level,
  style,
}: {
  children: React.ReactNode
  level?: 1 | 2 | 3 | 4 | 5,
  style?: React.CSSProperties

}) {
  return (
    <Title
      level={level}
      style={{
        fontWeight:900,
        textTransform: "uppercase",
        background: "var(--linear-gradient)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        ...style
      }}
    >
      {children}
    </Title>
  );
}

export default LinearTitle;
