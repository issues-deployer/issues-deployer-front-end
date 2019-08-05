export abstract class Group {
  id: number;
  code: string;
  shortName: string;
  name: string;
  description: string;
  webUrl: string;

  constructor(id: number, code: string, shortName: string, name: string, description: string,
              webUrl: string) {
    this.id = id;
    this.code = code;
    this.shortName = shortName;
    this.name = name;
    this.description = description;
    this.webUrl = webUrl;
  }
}
