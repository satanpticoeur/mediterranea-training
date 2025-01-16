"use client";

import { Flex } from "antd";
import { Typography } from "antd";
import Link from "antd/es/typography/Link";
const { Title } = Typography;

function MainCardTitle({ title }: { title: string }) {
  return (
    <Flex justify="space-between" align="center">
      <Title
        level={5}
        style={{ fontWeight: "700", color: "var(--text-color)" }}
      >
        {title}
      </Title>
      <Link
        href="/"
        style={{
          fontSize: "12px",
          fontWeight:"700",
          background: "var(--linear-gradient)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Tout Voir
      </Link>
    </Flex>
  );
}

export default MainCardTitle;
