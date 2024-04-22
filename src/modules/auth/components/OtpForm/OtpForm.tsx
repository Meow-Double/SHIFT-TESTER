import { Button, Input, Typography } from '@/components';
import { useOtpForm } from './hooks/useOtpForm';
import { PatternFormat } from 'react-number-format';
import styles from './OtpForm.module.css';
import { Controller } from 'react-hook-form';

export const OtpForm = () => {
  const { form, state, functions } = useOtpForm();


  return (
    <form className={styles.container} onSubmit={functions.onSubmit}>
      <Typography tag='p' variant='paragraph16_regular'>
        Введите номер телефона для входа <br /> в личный кабинет
      </Typography>

      <Controller
        name='phone'
        control={form.control}
        render={({ field: {onChange, ...restField}, fieldState }) => (
          <Input
            {...restField}
            disabled={state.isLoading}
            placeholder='Телефон'
            format='+375 (##) ### ## ##'
            component={PatternFormat}
            onValueChange={({value}) => onChange(value)}
            {...(fieldState.error && { error: fieldState.error.message })}
          />
  )}
      />

      <Button variant='conteined' type='submit' loading={state.isLoading}>
        Войти
      </Button>
    </form>
  );
};
