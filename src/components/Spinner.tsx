import { cn } from '@/lib/utils';
import { PropsWithClassname } from '@/types';
import { Loader } from 'lucide-react';

export function Spinner({ className }: PropsWithClassname) {
    return (
        <div className={cn('animate-spin', className)}>
            <Loader />
        </div>
    );
}
