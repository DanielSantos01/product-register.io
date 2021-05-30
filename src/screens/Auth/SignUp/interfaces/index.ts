export interface MainProps {
  isSubmiting: boolean;
  handleReturn: () => void;
  handleSignUp: () => Promise<void>;
}
