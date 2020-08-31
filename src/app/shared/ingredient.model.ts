export class Ingredient {
  // shortcut writing instead of defining properties first and then assigning them in the constructor, accessor is assigned right away when passing the arguments
  constructor(public name: string, public amount: number) {}
}