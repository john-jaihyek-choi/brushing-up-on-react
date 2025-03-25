import { useState } from "react";
import Container from "./Container";
import Controller from "./Controller";
import { CSSProperties } from "./types";

const Flexbox = () => {
  const [cssProperties, setCssProperties] = useState<CSSProperties>({
    itemCount: 10,
    wrap: "flex-nowrap",
    direction: "flex-row",
    crossAxis: 100,
    basis: 10,
  });

  return (
    <>
      <Controller
        setCssProperties={setCssProperties}
        cssProperties={cssProperties}
      />
      <Container cssProperties={cssProperties} />
    </>
  );
};
export default Flexbox;
