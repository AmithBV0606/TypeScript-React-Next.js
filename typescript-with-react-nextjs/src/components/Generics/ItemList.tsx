import React from "react";
import Item from "./Item";

const ItemList = () => {
  return (
    <div>
      <Item
        id={1}
        title="Post it"
        extra={[{ desc: "Post anything you wish!" }]}
      />
    </div>
  );
};

export default ItemList;