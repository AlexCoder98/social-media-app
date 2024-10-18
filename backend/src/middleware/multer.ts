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
        console.log(dir);
        console.log(file);

        if (dir === 'profileImage') {
            cb(null, 'public/images/users_images');
        } else if (dir === 'postImage') {

            cb(null, 'public/images/posts_images');
        }
    },
    filename: (req, file, cb) => {
        cb(null, `${new Date().toISOString()}_${file.originalname}`);
    }
});

// const postsImagesStorage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         console.log(file);

//         cb(null, 'public/images/posts_images');
//     },
//     filename: (req, file, cb) => {
//         cb(null, `${new Date().toISOString()}_${file.originalname}`);
//     }
// });

export const uploadFile = multer({ storage: storage, fileFilter: fileFilter });
// export const uploadPostImage = multer({ storage: postsImagesStorage, fileFilter: fileFilter });