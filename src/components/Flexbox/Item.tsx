interface ItemProps {
  id: number;
  height: number;
  width: number;
  basis: number;
}

const Item = ({ id, height, width, basis }: ItemProps) => {
  return (
    <div
      className={`flex-container flex-xy-center border border-blue-600`}
      style={{
        height: `${height}%`,
        width: `${width}%`,
        flex: `${0} ${0} ${basis}%`,
      }}
    >
      <h1>Item {id}</h1>
    </div>
  );
};
export default Item;
