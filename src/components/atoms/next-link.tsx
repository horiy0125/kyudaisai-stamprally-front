import React from 'react';
import Link from 'next/link';

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const NextLink: React.VFC<Props> = ({ href, children, className }: Props) => {
  return (
    <Link href={href}>
      <a className={className} href={href}>
        {children}
      </a>
    </Link>
  );
};

export default NextLink;
