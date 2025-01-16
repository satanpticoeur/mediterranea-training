import Dashboard from "@/components/Dashboard";
import MainAnnouncementCard from "@/components/MainCard";
import MainCardTitle from "@/components/MainCardTitle";
import ReturnBackBtn from "@/components/ReturnBackBtn";
import WelcomeMessage from "@/components/WelcomeMessage";
import { Flex } from "antd";

export default function Home() {
  return (
    <main>
      
      <Flex vertical gap={16}>
        <ReturnBackBtn style={{ alignSelf: "flex-start" }} />
        <WelcomeMessage />
        <div style={{ marginTop: "8px" }}></div>
        <Dashboard />
        <Flex vertical gap={16} justify="center" align="center">
          <div style={{ width: "100%" }}>
            <MainCardTitle title="Vos annonces en favoris" />
            <MainAnnouncementCard
              title="Intitulé de l’Annonce"
              imageUrl="/image1.jpg"
              num={3854}
              location="Dakar"
              surface="20 x 16"
              price={320}
              views={632}
            />
          </div>
          <div style={{ width: "100%" }}>
            <MainCardTitle title="Vos visites en cours" />
            <MainAnnouncementCard
              title="Intitulé de l’Annonce"
              imageUrl="/image2.jpg"
              num={3854}
              location="Dakar"
              surface="20 x 16"
              price={320}
              views={632}
              visited={true}
            />
          </div>
          <div style={{ width: "100%" }}>
            <MainCardTitle title="Vos annonces retenues" />
            <MainAnnouncementCard
              title="Intitulé de l’Annonce"
              imageUrl="/image3.jpg"
              num={3854}
              location="Dakar"
              surface="20 x 16"
              price={320}
              views={632}
              haveDocuments
            />
          </div>
        </Flex>
      </Flex>
    </main>
  );
}
