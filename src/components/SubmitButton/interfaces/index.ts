import React from 'react';

export interface SubmitButtonProps {
  style?: React.CSSProperties;
  onClick?: () => void | Promise<void>
}
