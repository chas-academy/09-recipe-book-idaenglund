export class Recipe { [x :string]: any;
    public id: string; 
    public url: string; 
    public title: string; 
    public photoPath: string;
    public ingredients: Array<string>;
    public healthLabels: Array<string>; 

    constructor(
        id: string, 
           url: string, 
           title: string, 
            photoPath: string, 
            ingredients: Array<string>, 
            healthLabels: Array<string>
        )
    {
        this.id = id; 
        this.url = url; 
        this.title = title; 
        this.photoPath = photoPath; 
        this.ingredients = ingredients; 
        this.healthLabels =  healthLabels; 
    }
}