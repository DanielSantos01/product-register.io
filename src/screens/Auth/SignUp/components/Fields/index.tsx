import React from 'react';

import SignUpFields from '@components/Fields';
import fields from './data/fields.json';

const Fields: React.FC = () => <SignUpFields fields={fields} />;

export default Fields;
