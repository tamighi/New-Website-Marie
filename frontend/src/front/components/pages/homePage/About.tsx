import useOnMount from "../../../hooks/useOnMount"
import Card from "../../custom/Card"

export const About = () => {
  const mounted = useOnMount()
  return (
    <div
      style={{
        transition: "opacity 1s, transform 1s",
        transitionDelay: "0.5s",
        opacity: mounted ? 1 : 0,
        transform: mounted ? "" : `translateX(-3em)`,
      }}
    >
      <Card>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
        fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
        aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis
        in cum quibusdam sed quae, accusantium et aperiam? Quod itaque
        exercitationem, at ab sequi qui modi delectus quia corrupti alias
        distinctio nostrum. <br /> <br />
        Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et.
        Sed numquam quibusdam at officia sapiente porro maxime corrupti
        perspiciatis asperiores, exercitationem eius nostrum consequuntur iure
        aliquam itaque, assumenda et! Quibusdam temporibus beatae doloremque
        voluptatum doloribus soluta accusamus porro reprehenderit eos inventore
        facere, fugit, molestiae ab officiis illo voluptates recusandae. Vel
        dolor nobis eius, ratione atque soluta, aliquam fugit qui iste
        architecto perspiciatis. Nobis, voluptatem! Cumque, eligendi unde
        aliquid minus quis sit debitis obcaecati error, delectus quo eius
        exercitationem tempore. Delectus sapiente, provident corporis dolorum
        quibusdam aut beatae repellendus est labore quisquam praesentium
        repudiandae non vel laboriosam quo ab perferendis velit ipsa deleniti
        modi!
      </Card>
    </div>
  )
}
