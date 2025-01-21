import { MOCK_STATUS_DELAY_MS } from '@/consts';
import { toggleServerStatus } from '@/lib/utils';
import { GameServerStatus } from '@/types';
import { useCallback, useState } from 'react';

export function useMockServerStatus(initialStatus: GameServerStatus) {
    const [status, setStatus] = useState(initialStatus);
    const [mutationStatus, setMutationStatus] = useState<'idle' | 'pending'>(
        'idle'
    );
    const toggleStatus = useCallback(() => {
        setMutationStatus('pending');
        setTimeout(() => {
            setStatus((s) => toggleServerStatus(s));
            setMutationStatus('idle');
        }, MOCK_STATUS_DELAY_MS);
    }, [status]);

    return { status, toggleStatus, mutationStatus } as const;
}
