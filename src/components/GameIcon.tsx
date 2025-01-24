import { GameName, PropsWithClassname } from '@/types';

import Image from 'next/image';
import { GAME_LOGO_MAP } from '@/consts';
import { cn } from '@/lib/utils';

/**
 * Displays a game icon based on the game name.
 * Currently only supports Minecraft, future icons can be added to GAME_LOGO_MAP in consts.ts
 */
export function GameIcon({
    gameName,
    className,
}: { gameName: GameName } & PropsWithClassname) {
    const src = GAME_LOGO_MAP[gameName];
    return (
        <div className={cn('size-4', className)}>
            <Image src={src} alt={`${gameName} logo`} />
        </div>
    );
}
