export interface EditUserProps {
  isVisible: boolean;
  toggleVisibility: () => void;
  isMobile: boolean;
}

export interface MainProps extends EditUserProps {
  userName: string;
  userRole?: string;
  isSubmiting: boolean;
  handleUpdate: () => Promise<void>;
}

export type KeysModel = | 'role' | 'name';
