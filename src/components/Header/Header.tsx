import React, { useState } from 'react';
import { Home, Search } from '@mui/icons-material';
import styles from './header.module.scss';
import useTypedSelector from '../../hooks/useTypedSelector';

const Header = () => {
  const [isFocus, isSetFocus] = useState<boolean>(false);
  const user = useTypedSelector((state) => state.user);

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
