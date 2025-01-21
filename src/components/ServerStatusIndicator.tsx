import { cn } from '@/lib/utils';
import { GameServerStatus } from '@/types';

export function ServerStatusIndicator({
    status,
}: {
    status: GameServerStatus;
}) {
    return (
        <div className="flex flex-row items-center justify-center gap-2">
            <p>{status === 'online' ? 'Online' : 'Offline'}</p>
            <div>
                <div
                    className={cn(
                        'bg-success absolute size-2 animate-ping rounded-full',
                        status === 'online' ? 'bg-success' : 'bg-error'
                    )}></div>
                <div
                    className={cn(
                        'bg-success z-10 size-2 rounded-full',
                        status === 'online' ? 'bg-success' : 'bg-error'
                    )}></div>
            </div>
        </div>
    );
}
