import React, { useState } from 'react';
import { Home, Search } from '@mui/icons-material';
import { getAuth } from 'firebase/auth';
import styles from './header.module.scss';

const Header = () => {
  const [isFocus, isSetFocus] = useState<boolean>(false);
  const ga = getAuth();
  const user = ga.currentUser;

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
