export interface ID {
  id: number;
}

export interface IconProps {
  width?: number;
  height?: number;
  svgFill?: string;
  pathFill?: string;
}

interface ILink {
  url: string;
  label: string;
  active: boolean;
}

export interface IPaginateData<T> {
  current_page: number;
  data: T;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: ILink;
  next_page_url: number;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
  total: number;
}
