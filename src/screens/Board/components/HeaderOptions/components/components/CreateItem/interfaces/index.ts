export interface CreateItemProps {
  isVisible: boolean;
  toggleVisibility: () => void;
  isMobile: boolean;
}

export interface MainProps extends CreateItemProps {
  handleCreateItem: () => Promise<void>;
  isCreating: boolean;
}

export type KeysModel =
  | 'name'
  | 'price'
  | 'quantity'
  | 'description'
  | 'ownerId'
  | 'category';
