import { Item } from '@hooks/Items/interfaces';

export interface EditUserProps {
  item: Item;
  isVisible: boolean;
  toggleVisibility: () => void;
  isMobile: boolean;
}

export interface MainProps extends EditUserProps {
  defaultValues: string[];
  handleUpdate: () => Promise<void>;
}

export type KeysModel =
  | 'price'
  | 'name'
  | 'quantity'
  | 'category'
  | 'description'
  | 'id';
