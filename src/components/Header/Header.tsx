import React, { useState } from 'react';
import { Home, Search } from '@mui/icons-material';
import styles from './header.module.scss';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const [isFocus, isSetFocus] = useState<boolean>(false);
  const { user } = useAuth();

  const changeHandler = () => {
    isSetFocus(true);
  };

  return (
    <header className={styles.header}>
      <div className={styles.imageWrapper}>
        <Home color="action" />
      </div>
      <div className={styles.wrapper}>
        {user
              && (
              <>
                <Search />
                <input onChange={changeHandler} className={styles.input} type="text" placeholder="Поиск" />
              </>
              )}
      </div>
    </header>
  );
};

export default Header;
