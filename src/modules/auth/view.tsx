import { Button, Input, Typography } from '@/components';
import { PatternFormat } from 'react-number-format';
import styles from './view.module.css';
import { useView } from './hooks/useView';
import { OtpForm } from './components/OtpForm/OtpForm';
import { useAuthViewStor } from './constans/store';

export const AuthView: React.FC<{}> = () => {
  const authViewStore = useAuthViewStor();

  return (
    <div className={styles.container}>
      {' '}
      <Typography tag='h1' variant='title'>
        Вход
      </Typography>
      {!authViewStore.isOtpSend && <OtpForm />}
    </div>
  );
};
