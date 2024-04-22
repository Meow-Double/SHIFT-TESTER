import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { type OtpScheme } from '../constans/otpScheme';
import { otpScheme } from '../constans/otpScheme';
import { usePostAuthOtpMutation } from '@/utils/api';
import { useAuthViewStor } from '@/modules/auth/constans/store';

export const useOtpForm = () => {
  const authViewStore = useAuthViewStor();

  const otpForm = useForm<OtpScheme>({
    mode: 'onBlur',
    resolver: zodResolver(otpScheme)
  });

  const postAuthMutation = usePostAuthOtpMutation();

  const onSubmit = otpForm.handleSubmit(async (values) => {
    const postAuthMutationResponse = await postAuthMutation.mutateAsync({ params: values });

    authViewStore.setIsOtpSend(true);
    authViewStore.setRetryDelay(postAuthMutationResponse.data.retryDelay);
  });

  return {
    form: otpForm,
    state: { isLoading: otpForm.formState.isSubmitting },
    functions: { onSubmit }
  };
};
