import { GameServer } from '@/types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function toggleServerStatus(status: GameServer['status']) {
    return status === 'offline' ? 'online' : 'offline';
}
