import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";
import { diskStorage } from "multer";

export const multerConfig: MulterOptions = {
  storage: diskStorage({
    destination: "./uploads",
    filename: (_, file, callback) => {
      const originalName = file.originalname;
      const fileExtension = originalName.split(".").pop();
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const filename = `file-${uniqueSuffix}.${fileExtension}`;
      callback(null, filename);
    },
  }),
  fileFilter: (_, file, cb) => {
    if (file.mimetype.startsWith("text/")) {
      cb(null, true);
    } else {
      cb(new Error("Only text documents are allowed."), false);
    }
  },
};
