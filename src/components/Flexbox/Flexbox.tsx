import { useState } from "react";
import Container from "./Container";
import Controller from "./Controller";
import { CSSProperties } from "./types";
import "./styles.css";

const Flexbox = () => {
  const [cssProperties, setCssProperties] = useState<CSSProperties>({
    itemCount: 10,
    wrap: "flex-nowrap",
    direction: "flex-row",
    height: 100,
    basis: 10,
  });

  return (
    <>
      <Controller setCssProperties={setCssProperties} />
      <Container cssProperties={cssProperties} />
    </>
  );
};
export default Flexbox;
