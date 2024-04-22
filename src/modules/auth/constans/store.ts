import { create } from "zustand";

interface AuthViewStor {
    isOtpSend: boolean,
    retryDelay:number,
    setIsOtpSend: (isOtpSend: boolean) => void
    setRetryDelay: (retryDelay: number) => void
}

export const useAuthViewStor = create<AuthViewStor>(set => ({
    isOtpSend: false,
    retryDelay:0,
    setIsOtpSend: (isOtpSend) => set({isOtpSend}),
    setRetryDelay: (retryDelay) => set({retryDelay})

}))
