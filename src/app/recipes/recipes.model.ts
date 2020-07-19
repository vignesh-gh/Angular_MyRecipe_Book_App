export class Recipes{
    public recipeName:string;
    public recipeDesc:string;
    public recipeImage:string;

    constructor(recName:string,recDesc:string,recImg:string){
        this.recipeName=recName;
        this.recipeDesc=recDesc;
        this.recipeImage=recImg;

    }
}