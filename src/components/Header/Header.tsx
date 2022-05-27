import React, { useRef, useState } from 'react';
import { Home, Search } from '@mui/icons-material';
import styles from './header.module.scss';

const Header = () => {
  const [isFocus, isSetFocus] = useState<boolean>(false);

  const changeHandler = (event: React.MouseEvent<HTMLInputElement>) => {
    isSetFocus(true); // ПОМЕНЯТЬ
  };

  return (
    <header className={styles.header}>
      <div className={styles.imageWrapper}>
        <Home color="action" />
      </div>
      <div className={styles.wrapper}>
        {!isFocus && <Search />}
        <input onClick={changeHandler} className={styles.input} type="text" placeholder="Поиск" />
      </div>
    </header>
  );
};

export default Header;
