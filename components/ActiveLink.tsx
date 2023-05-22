import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { CSSProperties, FC } from 'react';

interface ActiveLinkI {
  text: string;
  href: string;
}

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
};

export const ActiveLink: FC<ActiveLinkI> = ({ href, text }) => {
  const { asPath } = useRouter();
  return (
    <Link style={asPath === href ? style : undefined} href={href}>
      {text}
    </Link>
  );
};
