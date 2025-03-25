import Item from "./Item";
import { CSSProperties } from "./types";

interface ContainerProps {
  cssProperties: CSSProperties;
}

const Container = ({ cssProperties }: ContainerProps) => {
  const { wrap, direction, itemCount, crossAxis, basis } = cssProperties;

  return (
    <div
      className={`flex h-full border border-solid border-white overflow-auto ${wrap} ${direction}`}
    >
      {[...Array(itemCount)].map((_, i) => (
        <Item
          key={`item-${i + 1}`}
          id={i + 1}
          height={crossAxis}
          width={crossAxis}
          basis={basis}
        />
      ))}
    </div>
  );
};
export default Container;
