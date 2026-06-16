'use client';

import { useEffect } from 'react';

export default function RuntimeEventGuard() {
  useEffect(() => {
    const isPlainBrowserEvent = (value: unknown) =>
      typeof Event !== 'undefined' && value instanceof Event;

    const onUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (isPlainBrowserEvent(event.reason)) {
        event.preventDefault();
      }
    };

    const onError = (event: ErrorEvent) => {
      if (!event.error && isPlainBrowserEvent(event)) {
        event.preventDefault();
      }
    };

    window.addEventListener('unhandledrejection', onUnhandledRejection);
    window.addEventListener('error', onError, true);

    return () => {
      window.removeEventListener('unhandledrejection', onUnhandledRejection);
      window.removeEventListener('error', onError, true);
    };
  }, []);

  return null;
}
