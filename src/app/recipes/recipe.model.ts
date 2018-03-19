export class Recipe {
  [x: string]: any;
  public id: string;
  public url: string;
  public label: string;
  public image: string;
  public ingredientLines: Array<string>;
  public healthLabels: Array<string>;

  constructor(
    id: string,
    url: string,
    label: string,
    image: string,
    ingredientLines: Array<string>,
    healthLabels: Array<string>
  ) {
    this.id = id;
    this.url = url;
    this.label = label;
    this.image = image;
    this.ingredientLines = ingredientLines;
    this.healthLabels = healthLabels;
  }
}
