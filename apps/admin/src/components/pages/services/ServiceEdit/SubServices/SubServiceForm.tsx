import { FormAction, FormContent } from "components/pages/core";
import { Button, DeleteIcon, IconButton, Input, Paper } from "lib";
import { SubServiceDto } from "../../service";

export const SubServiceEditForm = ({
  subService,
  register,
  children,
}: {
  subService?: SubServiceDto;
  register: any;
  children: React.ReactNode;
}) => {
  return (
    <form>
      <Paper
        style={{
          boxSizing: "border-box",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <FormContent direction="horizontal">
          <Input
            {...register("textType")}
            defaultValue={subService && subService.textType}
            placeholder="Type de texte"
            flex
          />
          <Input
            {...register("pricePerCharacter")}
            defaultValue={subService && subService.pricePerCharacter}
            placeholder="Prix par caractere"
            flex
          />
        </FormContent>
        {children}
      </Paper>
    </form>
  );
};
