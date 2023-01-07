export const Background = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        position: "fixed",
      }}
    >
      <img
        style={{
          position: "absolute",
          top: 0,
          minHeight: "100%",
          maxHeight: "100%",
          minWidth: "100%",
          maxWidth: "100%",
        }}
        src="./backgrounds/autumn.jpg"
        alt="background"
      />
    </div>
  )
}
