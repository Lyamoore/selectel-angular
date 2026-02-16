export interface ListItem {
  id: number;
  name: string;
  value: number;
  selected: boolean;
}

export interface ListSection {
  type: string;
  items: ListItem[];
}
