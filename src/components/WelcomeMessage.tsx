"use client";
import LinearTitle from "./LinearTitle";

function WelcomeMessage() {
  return (
    <LinearTitle
      level={2}
      style={{
        textAlign: "center",
      }}
    >
      Bonjour, <br />
      Prénom NOM
    </LinearTitle>
  );
}

export default WelcomeMessage;
