class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutinFree,
    isVegan,
    isVegetarian,
    isLaktosFree
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.affordability = affordability;
    this.complexity = complexity;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.ingredients = ingredients;
    this.steps = steps;
    this.isGlutinFree = isGlutinFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLaktosFree = isLaktosFree;
  }
}

export default Meal;
