import path from 'path';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const allowedExtensions = ['png', 'jpg', 'jpeg', 'webp'];
        console.log(file);
        const fileExtension = path.extname(file.originalname);
        console.log('Multer filred!!!');
        console.log(fileExtension);
    },
    filename: (req, file, cb) => {
        console.log(file);
        const uniqueSuffix = Date.now().toLocaleString();
        cb(null, `${uniqueSuffix}-${path.extname(file.originalname)}`);
    }
})

export const uploadFile = multer({ storage: storage });