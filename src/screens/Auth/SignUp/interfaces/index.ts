export interface MainProps {
  isSubmiting: boolean;
  defaultValues: string[];
  handleReturn: () => void;
  handleSignUp: () => Promise<void>;
}
