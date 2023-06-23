import { Button, DeleteIcon, IconButton, useDialog } from "lib";
import { useQueryClient } from "react-query";
import { dataProvider } from "services/api";

interface FileDownloadFieldProps {
  file?: {
    storedFilename: string;
    originalFilename: string;
    id: number;
  };
  id: number | string;
}

export const FileDownloadField = (props: FileDownloadFieldProps) => {
  const { file, id } = props;
  const { showDialog } = useDialog();
  const queryClient = useQueryClient();

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

  const handleDelete = async () => {
    const res = await dataProvider.simpleRequest(
      `${process.env.BACKEND_URL}/devis/deleteFile/${id}`,
      { method: "DELETE" }
    );

    if (res.ok) {
      showDialog?.({ content: "File deleted successfully" });
      queryClient.invalidateQueries(["devis", { id: id.toString() }]);
    }
  };

  return (
    <div>
      {file ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span style={{ alignSelf: "center" }}>
            Fichier: {file.originalFilename}
          </span>
          <div style={{ display: "flex" }}>
            <Button onClick={handleDownload}>Telecharger</Button>
            <IconButton onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      ) : (
        "Aucun fichier joint"
      )}
    </div>
  );
};
