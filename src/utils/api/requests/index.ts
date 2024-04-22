import { api } from '@/utils/api/instance';

export interface postAuthOtpPhoneParams {
  phone: string;
}
type PostAuthOtpParams = createOtpDto;
export type PostAuthOtpRequestConfig = RequestConfig<PostAuthOtpParams>;

export const postAuthOtp = ({params, config}: PostAuthOtpRequestConfig) =>
  api.post<OtpResponse>('auth/otp', params, config);
