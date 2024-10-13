import multer, { FileFilterCallback } from 'multer';

const fileFilter = (req: any, file: Express.Multer.File, cb: FileFilterCallback) => {
    if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg' ||
        file.mimetype === 'image/webp'
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/users_images');
    },
    filename: (req, file, cb) => {
        cb(null, `${new Date().toISOString()}_${file.originalname}`);
    }
})

export const uploadFile = multer({ storage: storage, fileFilter: fileFilter });