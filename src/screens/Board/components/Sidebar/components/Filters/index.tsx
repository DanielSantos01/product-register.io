import React from 'react';

import { BackButton, ConfirmButton } from '@components/Button';
import Fields from '@components/Fields';
import { FiltersProps } from './interfaces';
import filters from './data/filters.json';
import { Description } from './styles';

const Filters: React.FC<FiltersProps> = ({ toggleVisibility }) => (
  <>
    <Description>
      Filter for the fields below. (Fields not inserted will be disregarded)
    </Description>
    <Fields fields={filters} />
    <ConfirmButton onClick={() => {}} />
    {toggleVisibility && <BackButton onClick={toggleVisibility} />}
  </>
);

export default Filters;
