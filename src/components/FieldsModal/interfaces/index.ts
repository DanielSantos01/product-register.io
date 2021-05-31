import { FieldModel } from '@/components/Fields/interfaces';
import React from 'react';

export interface FieldsModalProps {
  fields: FieldModel[];
  title: string;
  description: string;
  handleConfirm: () => void | Promise<void>;
  isVisible: boolean;
  toggleVisibility: () => void;
  isMobile: boolean;
  defaultValues?: string[];
  optionalStyles?: React.CSSProperties;
}
