"use client";

import { useEffect } from 'react';
import { useServiceWorker } from '@/hooks/useServiceWorker';

export default function ServiceWorkerProvider() {
    useServiceWorker();

    useEffect(() => {
        const url = new URL(window.location.href);
        if (url.searchParams.has('v')) {
            url.searchParams.delete('v');
            window.history.replaceState({}, '', url.toString());
        }
    }, []);

    return null; // Không render gì cả
}