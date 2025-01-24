import { GameServerPlayerCount } from '@/types';

/**
 * Displays the current player count of a game server.
 */
export function PlayerCount({ count }: { count: GameServerPlayerCount }) {
    const [current, max] = count.split('/');
    return (
        <div className="flex flex-row items-end p-1 text-3xl leading-none">
            <div className="font-semibold">{current}</div>
            <div className="flex text-[0.8em] font-normal text-muted-foreground/50">
                /{max}
            </div>
        </div>
    );
}
