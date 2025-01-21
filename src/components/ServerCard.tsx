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
import { Button } from './ui/button';
import { useMockServerStatus } from '@/hooks/useMockServerStatus';
import { Spinner } from './Spinner';

export function ServerCard({
    server: { status, name, game },
}: {
    server: GameServer;
}) {
    const {
        status: mockStatus,
        toggleStatus,
        mutationStatus,
    } = useMockServerStatus(status);
    return (
        <Card className="w-fu max-w-screen-md">
            <CardHeader
                className={cn(
                    'rounded-t-xl transition-all',
                    mockStatus === 'online'
                        ? 'bg-success text-success-foreground'
                        : 'bg-error text-error-foreground'
                )}>
                <CardTitle className="flex items-center justify-start gap-4 text-2xl">
                    <GameIcon gameName={game} className="size-8" />
                    {name}
                </CardTitle>
            </CardHeader>
            <CardContent>Test</CardContent>
            <CardFooter>
                <Button onClick={toggleStatus}>
                    {mutationStatus === 'pending' ? (
                        <Spinner />
                    ) : mockStatus === 'offline' ? (
                        'Start Server'
                    ) : (
                        'Stop Server'
                    )}
                </Button>
            </CardFooter>
        </Card>
    );
}
