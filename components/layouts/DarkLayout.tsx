import { FC } from 'react';
import styles from './DarkLayout.module.css';

interface Props {
  children: React.ReactNode;
}

export const DarkLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles['dark-container']}>
      <h3>Dark Layout</h3>
      <div className="">{children}</div>
    </div>
  );
};
