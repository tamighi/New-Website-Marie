import "./Icon.css"

const Icon = ({ name }: { name: string }) => {
  return <img className="Icon" src={`icons/${name}.svg`} alt="" />
}

export default Icon
