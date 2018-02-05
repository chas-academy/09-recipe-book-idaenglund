export class Recipe {
    public title: string; 
    public description: string; 
    public photoPath: string;

    constructor(title: string, description: string, photoPath: string) {
        this.title = title; 
        this.description = description; 
        this.photoPath = photoPath; 
    }
}