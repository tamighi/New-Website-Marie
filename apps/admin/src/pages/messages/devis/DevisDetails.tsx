import { SimpleField } from "components";
import { useGetCurrentQuery, useGetOne } from "hooks";
import { Button } from "lib";
import { dataProvider } from "services/api";
import { MessageDetails } from "../common";

const DevisDetails = ({ id }: { id: number | string }) => {
  const query = useGetCurrentQuery();
  const { data } = useGetOne("devis", { id }, query);

  if (!data) {
    return null;
  }
  const devis = data.data;

  const handleDownload = async () => {
    const res = await dataProvider.simpleRequest(
      `${process.env.BACKEND_URL}/devis/getFile/${devis.file?.id}`
    );
    const blob = await res.blob();
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement("a");

    link.href = url;
    link.download = devis.file?.originalFilename || "NoFilename"

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode?.removeChild(link);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <SimpleField label="Nombre de characteres">
        {devis.nbCharacter}
      </SimpleField>

      <SimpleField label="Service d'interet">
        {devis.service
          ? `${devis.service.name}: ${devis.subService?.textType}`
          : "Non defini"}
      </SimpleField>

      <SimpleField label="Date voulue">{`${
        devis.endDate
          ? new Date(devis.endDate).toLocaleDateString()
          : "Pas de date"
      }`}</SimpleField>

      <MessageDetails resource="devis" message={devis} />
      <Button disabled={!devis.file} onClick={devis.file && handleDownload}>
        File: {devis.file?.originalFilename || "Pas de fichiers joints"}
      </Button>
    </div>
  );
};

export default DevisDetails;
