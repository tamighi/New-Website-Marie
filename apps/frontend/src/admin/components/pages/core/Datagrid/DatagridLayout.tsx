import { BasePage, MyDatagrid, MyDatagridProps, Toolbar } from "..";
import { SuspenseWrapper } from "../SuspenseWrapper";

export const DataGridLayout = <T extends { id: string | number }>(
  props: MyDatagridProps<T>
) => {
  return (
    <BasePage>
      <Toolbar />
      <SuspenseWrapper>
        <MyDatagrid {...props} />
      </SuspenseWrapper>
    </BasePage>
  );
};
