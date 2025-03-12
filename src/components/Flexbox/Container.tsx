import Item from "./Item";
import { CSSProperties } from "./types";

interface ContainerProps {
  cssProperties: CSSProperties;
}

const Container = ({ cssProperties }: ContainerProps) => {
  const { wrap, direction, itemCount, height, basis } = cssProperties;

  return (
    <div
      className={`flex-container flex h-full overflow-auto ${wrap} ${direction}`}
    >
      {[...Array(itemCount)].map((_, i) => (
        <Item key={`item-${i + 1}`} id={i + 1} height={height} basis={basis} />
      ))}
    </div>
  );
};
export default Container;
