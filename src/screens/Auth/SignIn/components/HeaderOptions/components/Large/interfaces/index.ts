export interface MainProps {
  isSubmiting: boolean;
  goToSignUp: () => void;
  handleSignIn: () => Promise<void>;
}
