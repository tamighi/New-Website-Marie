import { ResourceType } from "types";
import { SimpleField } from "components";
import { Grid } from "lib";
import { StatusField } from "./StatusField";

type MessageResourceString = "question" | "review" | "devis";

type MessageDetailsProps<T extends ResourceType<MessageResourceString>> = {
  message: T;
  resource: MessageResourceString;
};

const MessageDetails = <T extends ResourceType<MessageResourceString>>(
  props: MessageDetailsProps<T>
) => {
  const { message, resource } = props;

  return (
    <Grid container style={{ gap: "16px" }}>
      <Grid xs={12}>
        <SimpleField label="Recu le">
          {new Date(message.date).toLocaleDateString()}
        </SimpleField>
      </Grid>
      <Grid xs={12}>
        <StatusField message={message} resource={resource}/>
      </Grid>
      <Grid xs={6}>
        <SimpleField label="Nom">{message.name}</SimpleField>
      </Grid>
      <Grid xs={6}>
        <SimpleField label="Email">{message.email}</SimpleField>
      </Grid>
      <Grid xs={12}>
        <SimpleField label="Message">{message.message}</SimpleField>
      </Grid>
    </Grid>
  );
};

export default MessageDetails;
