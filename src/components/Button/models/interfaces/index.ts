import React from 'react';

export interface CommonProps {
  onClick: () => void | Promise<void>;
  isLoading?: boolean;
  style?: React.CSSProperties;
}
