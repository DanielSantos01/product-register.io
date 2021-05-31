/* eslint-disable no-unused-vars */
export interface BaseItemModel {
  name: string;
  quantity: string;
  ownerId: string;
  category: string;
  price: string;
}

export interface OptionalBaseItemModel {
  name?: string;
  quantity?: string;
  ownerId?: string;
  category?: string;
  price?: string;
}

export interface Item extends BaseItemModel {
  _id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ItemContextData {
  isLoading: boolean;
  items: Item[];
  create: (data: BaseItemModel) => Promise<void>;
  deleteItem: (itemId: string, ownerId: string) => Promise<void>;
  update: (id: string, data: OptionalBaseItemModel) => Promise<void>;
  clearData: () => void;
  // query: (ownerId: string) => Promise<void>;
}

export interface ItemStateData {
  isLoading: boolean;
  items: Item[];
}

export type ItemActions =
  |{ type: 'set_items', items: Item[] }
  |{ type: 'set_loading', isLoading: boolean; }
  |{ type: 'clear_items_data'};

export type ItemReducer =
  (state: ItemStateData, action: ItemActions) => ItemStateData;
