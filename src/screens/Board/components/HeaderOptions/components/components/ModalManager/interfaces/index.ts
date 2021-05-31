export interface ModalManagerProps {
  isExitVisible: boolean;
  isCreateVisible: boolean;
  isEditVisible: boolean;
  toggleExit: () => void;
  toggleCreate: () => void;
  toggleEdit: () => void;
  isMobile?: boolean;
}
