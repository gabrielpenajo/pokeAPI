export class Pokemon {
  id: number = 0;
  name: string = "";
  url: string = "";
  sprite: string = "";
  types: string[] = [];

  static parse(data: any) {
    let pokemon = new Pokemon(data);

    return pokemon;
  }

  constructor(data: any) {
    this.id = parseInt(data.id);
    this.name = data.name;
    this.sprite = data.sprites.other.dream_world.front_default;
    this.url = data.species.url;

    for (let element of data.types)
      this.types.push(element.type.name);
  }
}
