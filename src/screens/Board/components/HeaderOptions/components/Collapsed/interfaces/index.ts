export interface CollapsedProps {
  isExitVisible: boolean;
  isCreateVisible: boolean;
  isEditVisible: boolean;
  toggleExit: () => void;
  toggleCreate: () => void;
  toggleEdit: () => void;
}

export interface MainProps extends CollapsedProps {
  isVisible: boolean;
  toggleVisibilty: () => void;
}
