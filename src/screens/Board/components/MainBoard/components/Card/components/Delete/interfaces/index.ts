import { Item } from '@/hooks/Items/interfaces';

export interface DeleteItemProps {
  item: Item;
  isVisible: boolean;
  toggleVisibility: () => void;
  isMobile: boolean;
}

export interface MainProps extends DeleteItemProps {
  handleDelete: () => Promise<void>;
}
