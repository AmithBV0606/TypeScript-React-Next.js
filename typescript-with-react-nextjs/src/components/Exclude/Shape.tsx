import React from "react";

// Exclude example :
type ShapeType = "cube" | "square" | "rectangle" | "triangle";
type TwoDShapeType = Exclude<ShapeType, "cube">;

// Combining Types :
type ThemeType = "dark" | "light";
type ColorType = "red" | "blue" | "yellow";

type ItemProps = {
  color: Exclude<`${ThemeType}-${ColorType}`, "dark-yellow">;
};

const Shape = (props: ItemProps) => {
  const shape: ShapeType = "cube";
  const twoD: TwoDShapeType = "rectangle";

  return <div>Shape</div>;
};

export default Shape;
