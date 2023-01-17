import Drawer from "../../../../lib/components/drawer/Drawer"

export const Sidebar = () => {
  return (
    <Drawer open={false} onClose={() => console.log("onClose")}>
      Drawer
    </Drawer>
  )
}
