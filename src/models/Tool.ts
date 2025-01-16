export class Tool {
    name: string;
    description: string;
    category: string;
    path: string;
  
    constructor(name: string, description: string, category: string, path: string) {
      this.name = name;
      this.description = description;
      this.category = category;
      this.path = path;
    }
}