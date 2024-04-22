import { useMutation } from '@tanstack/react-query';
import { PostAuthOtpRequestConfig, postAuthOtp } from '../requests';

export const usePostAuthOtpMutation = (
  settings?: MutationSettings<PostAuthOtpRequestConfig, typeof postAuthOtp>
) =>
  useMutation({
    mutationKey: ['postAuthOtp'],
    mutationFn: ({ params, config }) =>
      postAuthOtp({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
