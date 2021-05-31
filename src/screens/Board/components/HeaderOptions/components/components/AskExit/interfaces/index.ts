export interface AskExitProps {
  isVisible: boolean;
  toggleVisibility: () => void;
  isMobile: boolean;
}

export interface MainProps extends AskExitProps {
  handleSignOut: () => void;
}
