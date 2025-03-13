interface ItemProps {
  id: number;
  height: number;
  basis: number;
}

const Item = ({ id, height, basis }: ItemProps) => {
  return (
    <div
      className={`flex-container flex-xy-center border border-blue-600`}
      style={{
        height: `${height}%`,
        flex: `${0} ${0} ${basis}%`,
      }}
    >
      <h1>Item {id}</h1>
    </div>
  );
};
export default Item;
