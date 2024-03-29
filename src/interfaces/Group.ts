export interface Group {
  id?: string;
  name: string;
  peers?: GroupPeer[] | string[];
  peers_count?: number;
}

export interface GroupPeer {
  id: string;
  name: string;
}
