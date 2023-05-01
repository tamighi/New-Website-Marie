const EmptyData = (props: { message: string }) => {
  const { message } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {message}
    </div>
  );
};
export default EmptyData;
