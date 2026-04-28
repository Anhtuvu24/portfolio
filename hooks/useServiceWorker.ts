import { useEffect } from 'react';

const SW_UPDATE_INTERVAL = 1 * 60 * 1000; // 10 phút

export function useServiceWorker(): void {
    useEffect(() => {
        if (
            typeof window === 'undefined' ||
            !('serviceWorker' in navigator)
        ) return;

        let registration: ServiceWorkerRegistration | null = null;
        let intervalId: ReturnType<typeof setInterval>;

        const handleUpdateFound = () => {
            const newWorker = registration?.installing;
            if (!newWorker) return;

            newWorker.addEventListener('statechange', () => {
                if (
                    newWorker.state === 'installed' &&
                    navigator.serviceWorker.controller
                ) {
                    const url = new URL(window.location.href);
                    url.searchParams.set('v', Date.now().toString());
                    window.location.replace(url.toString());
                }
            });
        };

        const register = async () => {
            try {
                registration = await navigator.serviceWorker.register('/sw.js', {
                    updateViaCache: 'none',
                });

                registration.addEventListener('updatefound', handleUpdateFound);

                // Polling mỗi 10 phút
                intervalId = setInterval(() => {
                    registration?.update();
                }, SW_UPDATE_INTERVAL);

            } catch (err) {
                console.error('[SW] Registration failed:', err);
            }
        };

        register();

        return () => {
            clearInterval(intervalId);
            registration?.removeEventListener('updatefound', handleUpdateFound);
        };
    }, []);
}