import { SimpleField } from "components";
import { useGetCurrentQuery, useGetOne } from "hooks";
import { Button } from "lib";
import { MessageDetails } from "../common";

const DevisDetails = ({ id }: { id: number | string }) => {
  const query = useGetCurrentQuery();
  const { data } = useGetOne("devis", { id }, query);

  const handleDownload = async () => {
    const res = await fetch(
      `${process.env.BACKEND_URL}/devis/getFile/${devis.file?.id}`
    );
    const blob = await res.blob();
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement("a");

    link.href = url;
    link.download = "test2.txt"

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode?.removeChild(link);
  };

  if (!data) {
    return null;
  }
  const devis = data.data;
  console.log(devis.file);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Button onClick={handleDownload}>
        File: {devis.file?.originalFilename}
      </Button>
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
    </div>
  );
};

export default DevisDetails;
