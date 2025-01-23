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
                'group flex h-fit flex-row items-center justify-center gap-3 self-start rounded-full bg-success-foreground px-3 py-1 text-sm text-success',
                isOffline && 'bg-error-foreground text-error'
            )}>
            <p className="">{status === 'online' ? 'Online' : 'Offline'}</p>
            <div>
                <div
                    className={cn(
                        'absolute size-2 animate-ping rounded-full bg-success opacity-100 transition-all',
                        isOffline && 'bg-error opacity-0'
                    )}
                />
                <div
                    className={cn(
                        'z-10 size-2 rounded-full bg-success',
                        isOffline && 'bg-error'
                    )}
                />
            </div>
        </div>
    );
}
