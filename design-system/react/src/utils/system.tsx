/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  ForwardRefExoticComponent,
  PropsWithoutRef,
  ReactElement,
  RefAttributes,
} from "react";
import { forwardRef } from "react";

import type { PropsWithAs } from "./types";

type Render<P, OP = any> = (
  props: PropsWithAs<OP extends string ? Omit<P, OP> : P>
) => ReactElement;

export type CreateComponent<P, OP = any> = ForwardRefExoticComponent<
  PropsWithoutRef<PropsWithAs<OP extends string ? Omit<P, OP> : P>> &
    RefAttributes<any>
>;

/**
 * Creates a type-safe component with the `as`, css prop and `React.forwardRef`
 * inherit from styled function of Stitches.
 *
 * @example
 * import { createComponent } from "../../utils/system";
 *
 * type Props = {
 *   customProp?: boolean;
 * };
 *
 * const Component = createComponent<Props>(({ customProp, ...props }) => {
 *   return <div {...props} />;
 * });
 *
 * <Component as="button" customProp />
 */

export function createComponent<InitialProps, OmitProps extends string = "">(
  render: Render<InitialProps, OmitProps>
) {
  type Props = Omit<PropsWithAs<InitialProps>, OmitProps>;
  return forwardRef<any, Props>((props, ref) =>
    render({ ref, ...props } as any)
  );
}
