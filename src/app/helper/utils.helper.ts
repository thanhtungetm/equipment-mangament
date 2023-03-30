const imageExt = ["jpg", "png", "jpeg"];

export class UtilHelper {
    static isEmptyString(value: string = "") {
        return value.trim().length === 0;
    }
    static isImageFile(file: any) {
        const extension = file.name.split(".")[1].toLowerCase();
        console.log(file, extension,imageExt );
        
        if (imageExt.includes(extension.toLowerCase())) {
            return true;
        }
        return false;
    }
    static checkExpiredDate(date: string){
        return new Date(date).getTime() > new Date().getTime()

    }
}
