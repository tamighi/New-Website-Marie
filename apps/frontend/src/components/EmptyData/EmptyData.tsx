import leaf from "assets/images/leaf.png";

const EmptyData = (props: { message: string }) => {
  const { message } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <img
        src={leaf}
        alt=""
        style={{
          width: "50%",
        }}
      />
      {message}
    </div>
  );
};
export default EmptyData;
