import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { saveAs } from "file-saver";
import { createPdf, getPdf } from "../api/my-api";
const ShowData = ({ formInput, result }) => {
  const savePdfToFile = (pdfBlob, fileName) => {
    const blob = new Blob([pdfBlob], { type: "application/pdf" });
    saveAs(blob, fileName);
  };
  const downLoadPdf = async () => {
    try {
      const create = await createPdf({ ...formInput, result });
      if (create?.status !== 200) {
        return alert(create?.response?.data?.message);
      }
      const resultPdf = await getPdf();
      if (resultPdf?.data) {
        savePdfToFile(resultPdf?.data, "furkan.pdf");
      } else {
        alert(error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        width: "30rem",

        alignItems: "center",
        padding: "1rem ",
        margin: "auto",
        boxShadow: "0 0 3px grey",
        justifyContent: "space-between",
      }}
    >
      <Typography sx={{ fontWeight: "600" }}>RESULT : {result}</Typography>
      <IconButton size="large" color="success" onClick={downLoadPdf}>
        <FileDownloadIcon color="error" />
      </IconButton>
    </Box>
  );
};
export default ShowData;
