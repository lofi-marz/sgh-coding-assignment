import { GameServer } from '@/types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function toggleServerStatus(status: GameServer['status']) {
    return status === 'offline' ? 'online' : 'offline';
}

export function stringToHueDeg(str: string) {
    const deg =
        [...str].reduce((acc, char) => {
            return 2 * char.charCodeAt(0) + ((acc << 5) - acc);
        }, 0) % 360;
    console.log(str, deg);
    return deg;
}
