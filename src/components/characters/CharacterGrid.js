import React from "react";
import CharacterItem from "./CharacterItem";
import Spinner from "../ui/Spinner";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>
      <Spinner />
    </h1>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem item={item}></CharacterItem>
      ))}
    </section>
  );
};

export default CharacterGrid;
