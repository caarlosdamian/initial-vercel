import { ActiveLink } from './ActiveLink';
import React, { FC } from 'react';
import styles from './Navbar.module.css';
import { text } from 'stream/consumers';

interface MenuItems {
  text: string;
  href: string;
}
export const Navbar: FC = () => {
  const menuItems: MenuItems[] = [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'About',
      href: '/about',
    },
    {
      text: 'Contact',
      href: '/contact',
    },
    {
      text: 'Pricing',
      href: '/pricing',
    },
  ];

  return (
    <nav className={styles.menu_container}>
      {menuItems.map(({ text, href }) => (
        <ActiveLink key={text} text={text} href={href} />
      ))}
    </nav>
  );
};
