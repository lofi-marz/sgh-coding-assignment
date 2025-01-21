import { MOCK_STATUS_DELAY_MS } from '@/consts';
import { toggleServerStatus } from '@/lib/utils';
import { GameServerStatus } from '@/types';
import { useCallback, useState } from 'react';
import { toast } from 'sonner';

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
            setStatus((s) => {
                const newValue = toggleServerStatus(s);
                toast(`Server ${serverName} is now ${newValue}`);
                return newValue;
            });

            setMutationStatus('idle');
        }, MOCK_STATUS_DELAY_MS);
    }, []);

    return { status, toggleStatus, mutationStatus } as const;
}
