import { Item } from '@/hooks/Items/interfaces';

export interface CardProps {
  item: Item;
}

export interface MainProps extends CardProps {
  isDeleteVisible: boolean;
  isEditVisible: boolean;
  toggleDelete: () => void;
  toggleEdit: () => void;
}
