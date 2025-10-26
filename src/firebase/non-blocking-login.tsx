'use client';
import {
  Auth,
  signInAnonymously,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import type { useToast } from '@/hooks/use-toast';

type ToastFunction = ReturnType<typeof useToast>['toast'];
type ToastPayload = Parameters<ToastFunction>[0];

/** Initiate anonymous sign-in (non-blocking). */
export function initiateAnonymousSignIn(authInstance: Auth, toast: ToastFunction, toastPayload: ToastPayload): void {
  toast(toastPayload);
  signInAnonymously(authInstance);
}

/** Initiate email/password sign-up (non-blocking). */
export function initiateEmailSignUp(authInstance: Auth, email: string, password: string, toast: ToastFunction): void {
  createUserWithEmailAndPassword(authInstance, email, password)
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        toast({
            variant: "destructive",
            title: "Sign-up Failed",
            description: "This email address is already in use. Please sign in or use a different email.",
        });
      } else {
        console.error("An unexpected error occurred during sign-up:", error);
        toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "An unexpected error occurred during sign-up. Please try again later.",
        });
      }
    });
}

/** Initiate email/password sign-in (non-blocking). */
export function initiateEmailSignIn(authInstance: Auth, email: string, password: string, toast: ToastFunction): void {
  signInWithEmailAndPassword(authInstance, email, password)
    .catch(error => {
      if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        toast({
            variant: "destructive",
            title: "Login Failed",
            description: "The email or password you entered is incorrect. Please try again.",
        });
      } else {
        console.error("An unexpected error occurred during sign-in:", error);
        toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "An unexpected error occurred during sign-in. Please try again later.",
        });
      }
    });
}
