export interface MainProps {
  shouldCollapse: boolean;
  isSubmiting: boolean;
  goToSignUp: () => void;
  handleSignIn: () => Promise<void>;
}
