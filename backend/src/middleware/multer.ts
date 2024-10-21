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
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let dir = file.fieldname;
        switch (dir) {
            case 'profileImage':
                cb(null, 'public/images/users');
                break;
            case 'postImage':
                cb(null, 'public/images/posts');
                break;
        }
        req.fieldName = file.fieldname;
    },
    filename: (req, file, cb) => {
        cb(null, `${new Date().toISOString()}_${file.originalname}`);
    }
});

export const uploadFile = multer({ storage: storage, fileFilter: fileFilter });