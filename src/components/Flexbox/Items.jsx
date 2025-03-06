const Items = ({ id, height, basis }) => {
  return (
    <div
      className={`flex-item flex items-center justify-center`}
      style={{
        height: `${height}%`,
        flex: `${0} ${0} ${basis}%`,
      }}
    >
      <h1>Item {id}</h1>
    </div>
  );
};
export default Items;
