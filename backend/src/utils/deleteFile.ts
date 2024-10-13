import fs from 'fs';

export const deleteFile = (filePath: string) => {
    fs.unlink(filePath, err => {
        if (err) {
            return 'Error: file with provided directory does not exist';
        }
        return 'File has been successfully removed';
    });
}