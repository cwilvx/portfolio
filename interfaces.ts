export enum post_sources {
  Notion = "Notion",
}

export interface Post {
  title: string;
  link: string;
  image: string;
  source: post_sources;
  date: string;
}
