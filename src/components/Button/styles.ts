import styled from 'styled-components';

import { Button } from '@components/SubmitButton';

export const ConfirmButton = styled(Button)`
  width: 100%;
  margin-bottom: 30px;
`;

export const BackButton = styled(ConfirmButton)`
  background: ${({ theme }) => `linear-gradient(-180deg, ${theme.colors.headerSecondary}, ${theme.colors.headerPrimary})`};
`;
