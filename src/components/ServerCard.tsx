'use client';

import { GameServer } from '@/types';
import { useState } from 'react';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from './ui/card';
import { cn } from '@/lib/utils';
import { GameIcon } from './GameIcon';

export function ServerCard({
    server: { status, name, game },
}: {
    server: GameServer;
}) {
    const [serverOnline, setServerOnline] = useState(status);
    return (
        <Card className="w-fu max-w-screen-md">
            <CardHeader
                className={cn(
                    'rounded-t',
                    status === 'online'
                        ? 'bg-success text-success-foreground'
                        : 'bg-error text-error-foreground'
                )}>
                <CardTitle className="flex">
                    <GameIcon gameName={game} />
                    {name}
                </CardTitle>
            </CardHeader>
            <CardContent>Test</CardContent>
            <CardFooter>Test</CardFooter>
        </Card>
    );
}
