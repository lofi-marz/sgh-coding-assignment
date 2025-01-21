import { GameName, PropsWithClassname } from '@/types';

import Image from 'next/image';
import { GAME_LOGO_MAP } from '@/consts';
import { cn } from '@/lib/utils';
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
