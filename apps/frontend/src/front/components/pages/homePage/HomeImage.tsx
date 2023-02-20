import cat from "assets/images/cat.png"

import "../../../styles/Animation.css"

export const HomeImage = () => {
  return (
    <img
      className="slideInLeft"
      src={cat}
      alt=""
      style={{
        width: "100%",
      }}
    />
  )
}
