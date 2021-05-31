import { Item } from '@hooks/Items/interfaces';

export interface ModalManagerProps {
  item: Item
  isDeleteVisible: boolean;
  isEditVisible: boolean;
  toggleDelete: () => void;
  toggleEdit: () => void;
  isMobile?: boolean;
}
