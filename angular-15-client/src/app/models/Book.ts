export class Book {
  public id: number | undefined;
  public title: string | undefined;
  public author: string | undefined;
  public publisher: string | undefined;
  public publicationDate: string | undefined;
  public language: string | undefined;
  public category: string | undefined;
  public numberOfPages: number | undefined;
  public ourPrice: number | undefined;
  public active: boolean | undefined;
  public description: string | undefined;
  public inStockNumber: number = -1;
}
