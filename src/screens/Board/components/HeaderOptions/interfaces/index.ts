export interface MainProps {
  isExitVisible: boolean;
  isCreateVisible: boolean;
  isEditVisible: boolean;
  shouldCollapse: boolean;
  toggleExit: () => void;
  toggleCreate: () => void;
  toggleEdit: () => void;
}
