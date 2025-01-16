"use client"

import { Card, Flex , Typography} from "antd";
import LinearTitle from "./LinearTitle";
const {Title, Text} = Typography
function Dashboard() {
  return (
    <section>
      <LinearTitle level={5}>Votre tableau de bord</LinearTitle>
      <Flex justify="space-between" gap={16}>
        <div id="left" style={{minHeight: "100%" }}>
          <DashboardCard
            title="63"
            content="Annonces disponibles"
            color="#CFD91E"
          />
        </div>
        <Flex vertical gap={16}>
          <DashboardCard title="4" content="Visites" color="#07CC73" />
          <DashboardCard title="12" content="Favoris" color="#3185BA" />
        </Flex>
      </Flex>
    </section>
  );
}

export default Dashboard;

const DashboardCard = ({
  title,
  content,
  color = "#CFD91E",
}: {
  title: string;
  content: string;
  color: string;
}) => {
  return (
    <Card
      bordered={false}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color,
        textAlign: "center",
        minWidth: "148px",
        width: "100%",
        height: "100%",
        boxShadow: "0px 4px 4px 0px #00000040",
      }}
    >
      
        <Title level={2} style={{marginBottom: "4px"}}>{title}</Title>
        <Text id="text-clamp">{content}</Text>
    </Card>
  );
};
