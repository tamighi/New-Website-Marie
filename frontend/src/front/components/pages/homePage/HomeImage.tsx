import useOnMount from "../../../hooks/useOnMount"

export const HomeImage = () => {
  const mounted = useOnMount()
  return (
    <img
      src={"./images/cat.png"}
      height="100%"
      width="100%"
      alt=""
      style={{
        transition: "opacity 1s, transform 1s",
        opacity: mounted ? 1 : 0,
        transform: mounted ? "" : `translateX(-3em)`,
      }}
    />
  )
}
