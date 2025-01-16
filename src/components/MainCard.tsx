import { EyeOutlined, FolderOutlined } from "@ant-design/icons";
import { Card, Flex } from "antd";
import Image from "next/image";
import LinearTitle from "./LinearTitle";

type AnnouncementType = {
  title: "Intitulé de l’Annonce" | string;
  imageUrl: string;
  num: number;
  location: string;
  surface: string;
  price: number;
  views: number;
  visited?: boolean;
  haveDocuments?: boolean;
};

function MainAnnouncementCard({
  title,
  imageUrl,
  num,
  location,
  surface,
  price,
  views,
  visited,
  haveDocuments,
}: AnnouncementType) {
  const visitedDate = new Date();
  const visitedDateFormatted = visitedDate.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
      <Card style={{ width: "100%", boxShadow: "0px 4px 9.6px 0px #A25C4526" }} >
        <LinearTitle level={5} style={{textTransform: "uppercase"}}>{title}</LinearTitle>
        <Flex justify="space-between">
        <div>
          <p>N° annonce : {num}</p>
          <p>Localisation : {location}</p>
          <Flex gap={8}>
            <span
              style={{
                background: "#DDD",
                color: "#333",
                padding: "4px",
                borderRadius: "4px",
              }}
            >
              {surface}
            </span>
            <span
              style={{
                background: "#DDD",
                color: "#333",
                padding: "4px",
                borderRadius: "4px",
              }}
            >
              {price}
            </span>
          </Flex>
        </div>
        <Image alt={title} src={imageUrl} width={80} height={80} />
      </Flex>

      {visited && (
        <p>
          <span style={{ background: "#f5f5f5", color: "#333" }}>
            Visite: {visitedDateFormatted}
          </span>
        </p>
      )}

      {haveDocuments && (
        <Flex vertical align="center"
          style={{
            boxShadow:
              "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
              cursor: "pointer",
              margin: "16px",
              padding: "16px",
              width: "fit-content"
          }}
        >
          <FolderOutlined />
          <p>Mes documents</p>
        </Flex>
      )}

      <Flex justify="space-between">
        <p>Publié il y a deux semaines</p>
        <p>
          <EyeOutlined style={{color: "var(--warning)"}} />
          <span style={{ marginLeft: "4px" }}>{views} vues</span>
        </p>
      </Flex>
    </Card>
  );
}

export default MainAnnouncementCard;
