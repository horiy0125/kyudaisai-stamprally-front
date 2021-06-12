import React from 'react';
import NextLink from '../next-link';
import styles from '../../../styles/components/atoms/links/full-width-rounded-link.module.scss';
import { combineClasses } from '../../../utils/combine-classes';

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const FullWidthRoundedLink: React.VFC<Props> = ({
  href,
  children,
  className,
}: Props) => {
  return (
    <NextLink className={combineClasses(styles.root, className)} href={href}>
      {children}
    </NextLink>
  );
};

export default FullWidthRoundedLink;
