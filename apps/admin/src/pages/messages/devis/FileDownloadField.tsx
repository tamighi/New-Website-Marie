import { Button } from "lib";
import { dataProvider } from "services/api";

interface FileDownloadFieldProps {
  file?: {
    storedFilename: string;
    originalFilename: string;
    id: number;
  };
}

export const FileDownloadField = (props: FileDownloadFieldProps) => {
  const { file } = props;

  const handleDownload = async () => {
    const res = await dataProvider.simpleRequest(
      `${process.env.BACKEND_URL}/devis/getFile/${file?.id}`
    );
    const blob = await res.blob();
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement("a");

    link.href = url;
    link.download = file?.originalFilename || "NoFilename";

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode?.removeChild(link);
  };

  return (
    <div>
      {file ? (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Fichier: {file.originalFilename}</span>
          <Button onClick={handleDownload}>Telecharger</Button>
        </div>
      ) : (
        "Aucun fichier joint"
      )}
    </div>
  );
};
