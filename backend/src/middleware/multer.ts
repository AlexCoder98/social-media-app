import multer, { FileFilterCallback } from 'multer';

const fileFilter = (req: any, file: Express.Multer.File, cb: FileFilterCallback) => {
    console.log('File type');
    console.log(file.mimetype);

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
        console.log('File name in storage ' + file);
        cb(null, `${new Date().toISOString()}_${file.originalname}`);
    }
})

export const uploadFile = multer({ storage: storage, fileFilter: fileFilter });