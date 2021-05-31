export interface CollapsedProps {
  isSubmiting: boolean;
  handleSignIn: () => Promise<void>
  goToSignUp: () => void;
}

export interface MainProps extends CollapsedProps {
  isVisible: boolean;
  toggleVisibilty: () => void;
}
