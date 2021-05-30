export interface CollapsedProps {
  handleSignIn: () => Promise<void>
  goToSignUp: () => void;
}

export interface MainProps extends CollapsedProps {
  isVisible: boolean;
  toggleVisibilty: () => void;
}
