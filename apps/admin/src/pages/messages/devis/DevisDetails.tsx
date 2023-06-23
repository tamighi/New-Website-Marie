import { SimpleField } from "components";
import { useGetCurrentQuery, useGetOne } from "hooks";
import { MessageDetails } from "../common";
import { FileDownloadField } from "./FileDownloadField";

const DevisDetails = ({ id }: { id: number | string }) => {
  const query = useGetCurrentQuery();
  const { data } = useGetOne("devis", { id }, query);

  if (!data) {
    return null;
  }
  const devis = data.data;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <FileDownloadField file={devis.file} id={id} />
      <SimpleField label="Nombre de characteres">
        {devis.nbCharacter}
      </SimpleField>

      <SimpleField label="Service d'interet">
        {devis.service
          ? `${devis.service.name}: ${
              devis.subService?.textType || "Non defini"
            }`
          : "Non defini"}
      </SimpleField>

      <SimpleField label="Date voulue">{`${
        devis.endDate
          ? new Date(devis.endDate).toLocaleDateString()
          : "Pas de date"
      }`}</SimpleField>

      <MessageDetails resource="devis" message={devis} />
    </div>
  );
};

export default DevisDetails;
