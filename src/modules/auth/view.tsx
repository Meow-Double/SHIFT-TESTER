import { Button, Typography } from '@/components';

import styles from "./view.module.css";

export const AuthView: React.FC<{}> = () => {
  return (
    <div className={styles.container}>
      <Typography tag="h1" variant="title">
        Вход
      </Typography>
      <Typography tag="p" variant="paragraph16_regular">
        Введите номер телефона для входа <br /> в личный кабинет
      </Typography>
      <Button variant='conteined'>
        Войти
      </Button>
    </div>
  );
};
