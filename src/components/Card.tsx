import React from "react";
import useImage from "../hooks/useImage";

interface CardProps {
  name: string;
  url: string;
}

const Card = (props: CardProps) => {
  const { data, isLoading, error } = useImage({ url: props.url });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  if (!data) {
    return <div>Not found</div>;
  }

  return (
    <div className="card">
      <img src={data.sprites.front_default} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.url}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "10px 10px 0 0",
          justifyContent: "space-between",
        }}
      >
        <p>Height: {data.height}</p>
        <p>Weight: {data.weight}</p>
      </div>
    </div>
  );
};

export default Card;
