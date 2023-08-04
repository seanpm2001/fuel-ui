import { Components } from '~/defs';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';

import type * as t from './defs';
import { useFlexProps } from './useFlexProps';

export type StackProps = t.StackProps;

const _Stack = _unstable_createComponent<t.StackDef>(
  Components.Stack,
  ({ as = 'div', ...props }) => {
    const classes = useFlexProps(props, props.css);
    return _unstable_createEl(as, { ...props, ...classes.stack });
  },
);

export const Stack = createPolymorphicComponent<t.StackDef>(_Stack);

Stack.defaultProps = {
  gap: '$2',
  direction: 'column',
};
