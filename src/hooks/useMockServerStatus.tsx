import { MOCK_STATUS_DELAY_MS } from '@/consts';
import { toggleServerStatus } from '@/lib/utils';
import { GameServerStatus } from '@/types';
import { useCallback, useState } from 'react';
import { toast } from 'sonner';

/**
 * Since the data is hardcoded, there is no actual API call to start/stop a server
 * This hook simulates the server status change, adding a delay in order to show a loading state
 */
export function useMockServerStatus(
    initialStatus: GameServerStatus,
    serverName: string
) {
    const [status, setStatus] = useState(initialStatus);
    const [mutationStatus, setMutationStatus] = useState<'idle' | 'pending'>(
        'idle'
    );

    const toggleStatus = useCallback(() => {
        setMutationStatus('pending');
        setTimeout(() => {
            toast.success(
                `Server ${serverName} is now ${toggleServerStatus(status)}`
            );

            setStatus(toggleServerStatus);
            setMutationStatus('idle');
        }, MOCK_STATUS_DELAY_MS);
    }, [status, serverName]);

    return { status, toggleStatus, mutationStatus } as const;
}
