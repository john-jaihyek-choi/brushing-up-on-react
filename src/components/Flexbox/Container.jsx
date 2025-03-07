import Item from "./Item";

const Container = ({ cssProperties }) => {
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
