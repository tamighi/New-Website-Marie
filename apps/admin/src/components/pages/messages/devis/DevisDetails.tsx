import { SimpleField } from "components/pages/core/fields/SimpleField";
import { useGetOne } from "hooks";
import { MessageDetails } from "../common/MessageDetails";

export const DevisDetails = ({ id }: { id: number | string }) => {
  const { data } = useGetOne("devis", { id });
  if (!data) {
    return null;
  }
  const devis = data.data;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <SimpleField label="Nombre de characteres">
        {devis.nbCharacter}
      </SimpleField>

      <SimpleField label="Service d'interet">
        {devis.service ? `${devis.service.name}: ${devis.subService?.textType}` : "Non defini"}
      </SimpleField>

      <SimpleField label="Date voulue">{`${
        devis.endDate
          ? new Date(devis.endDate).toLocaleDateString()
          : "Pas de date"
      }`}</SimpleField>

      <MessageDetails message={devis} />
    </div>
  );
};
