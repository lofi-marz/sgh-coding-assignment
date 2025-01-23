import { GameServerPlayerCount } from '@/types';

export function PlayerCount({ count }: { count: GameServerPlayerCount }) {
    const [current, max] = count.split('/');
    return (
        <div className="flex flex-row items-end justify-center text-3xl leading-none">
            <div className="font-semibold">{current}</div>
            <div className="flex text-[0.5em] text-muted-foreground">
                /{max}
            </div>
        </div>
    );
}
