import { cn } from '@/lib/utils';
import { GameServerStatus } from '@/types';

export function ServerStatusIndicator({
    status,
}: {
    status: GameServerStatus;
}) {
    const isOffline = status === 'offline';
    return (
        <div
            className={cn(
                'bg-success-foreground text-success group flex h-fit flex-row items-center justify-center gap-3 self-start rounded-full px-3 py-1 text-sm',
                isOffline && 'bg-error-foreground text-error'
            )}>
            <p>{status === 'online' ? 'Online' : 'Offline'}</p>
            <div>
                <div
                    className={cn(
                        'bg-success absolute size-2 animate-ping rounded-full opacity-100 transition-all',
                        isOffline && 'bg-error opacity-0'
                    )}
                />
                <div
                    className={cn(
                        'bg-success z-10 size-2 rounded-full',
                        isOffline && 'bg-error'
                    )}
                />
            </div>
        </div>
    );
}
