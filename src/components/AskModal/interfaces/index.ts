export interface AskExitProps {
  title: string;
  description: string;
  onConfirm: () => void | Promise<void>;
  isVisible: boolean;
  toggleVisibility: () => void;
  isMobile: boolean;
  confirmButtonColor?: string;
  declineButtonColor?: string;
}
