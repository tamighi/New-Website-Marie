const PendingMessageList = () => {
  // TODO: useGetList should take an object as parameters (filter)
  const messages = [
    {
      message: "lorem ...",
      name: "Name1",
    },
    {
      message: "lorem ...",
      name: "Name2",
    },
  ];

  return (
    <div>
      {messages.map((message) => {
        return (
          <div>
            <p>{message.name}</p>
            <p>{message.message}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PendingMessageList;
