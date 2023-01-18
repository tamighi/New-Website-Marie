import useOnMount from "../../../../lib/hooks/hooks/useOnMount"

export const HomeImage = () => {
  const mounted = useOnMount()
  return (
    <img
      src={"./images/cat.png"}
      alt=""
      style={{
        width: "100%",
        transition: "opacity 1s, transform 1s",
        opacity: mounted ? 1 : 0,
        transform: mounted ? "" : `translateX(-3em)`,
        flexShrink: 0,
      }}
    />
  )
}
