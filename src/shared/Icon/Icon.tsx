import { type SVGProps } from 'react';

import { makeCn } from '@/src/utils';
import { type IconName } from '@/src/models/icon-names';

export { IconName };

const cn = makeCn('Icon');

export function Icon({
  name,
  childClassName,
  className,
  children,
  ...props
}: SVGProps<SVGSVGElement> & {
  name: IconName;
  childClassName?: string;
}) {
  if (children) {
    return (
      <span className={cn('', [childClassName])}>
        <Icon name={name} className={className} {...props} />
        {children}
      </span>
    );
  }
  return (
    <svg {...props} className={cn('icon', [className])}>
      <use href={`./icons/sprite.svg#${name}`} />
    </svg>
  );
}
