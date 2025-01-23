'use client';

import { GameServer } from '@/types';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from './ui/card';
import { cn, stringToHueDeg } from '@/lib/utils';
import { GameIcon } from './GameIcon';
import { Button } from './ui/button';
import { useMockServerStatus } from '@/hooks/useMockServerStatus';
import { Spinner } from './Spinner';
import { Badge } from './ui/badge';
import { ServerStatusIndicator } from './ServerStatusIndicator';
import { useCallback, useState } from 'react';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from './ui/dialog';
import { PlayerCount } from './PlayerCount';
import { ServerCardSection } from './ServerCardSection';
export function ServerCard({
    server: { status, name, game, mods, version, players, type, region },
}: {
    server: GameServer;
}) {
    const {
        status: mockStatus,
        toggleStatus,
        mutationStatus,
    } = useMockServerStatus(status, name);
    const [dialogOpen, setDialogOpen] = useState(false);
    const onToggleServerStatus = useCallback(() => {
        if (mockStatus === 'offline') {
            toggleStatus();
        } else {
            setDialogOpen(true);
        }
    }, [mockStatus, toggleStatus]);
    return (
        <Card className="flex flex-col">
            <CardHeader
                className={cn(
                    'flex flex-row items-center justify-start gap-4 rounded-t-xl transition-all'
                )}>
                <GameIcon gameName={game} className="size-8" />
                <div className="grow">
                    <CardTitle className="flex w-full items-center justify-between gap-4">
                        {name}
                    </CardTitle>
                    <CardDescription
                        className={cn(
                            'flex flex-col rounded-t-xl transition-all'
                        )}>
                        {game} • {version}
                    </CardDescription>
                </div>
            </CardHeader>
            <CardContent className="flex grow flex-col gap-4">
                <div className="flex justify-between">
                    <ServerCardSection
                        title="Status"
                        className="items-start"
                        variant="inline">
                        <div className="flex grow items-center justify-center">
                            <ServerStatusIndicator status={mockStatus} />
                        </div>
                    </ServerCardSection>
                    <ServerCardSection
                        title="Players"
                        className="items-end"
                        variant="inline">
                        <PlayerCount count={players} />
                    </ServerCardSection>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <ServerCardSection title="Region" className="relative">
                        <p>{region}</p>
                    </ServerCardSection>
                    <ServerCardSection title="Type">{type}</ServerCardSection>
                </div>

                <ServerCardSection title="Mods" variant="inline">
                    <div className="flex flex-wrap gap-1">
                        {mods.map((m) => (
                            <Badge
                                key={m}
                                variant="secondary"
                                className="bg-success-foreground text-success"
                                style={{
                                    filter: `hue-rotate(${stringToHueDeg(m)}deg)`,
                                }}>
                                {m}
                            </Badge>
                        ))}
                    </div>
                </ServerCardSection>
            </CardContent>
            <CardFooter>
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                    <Button
                        onClick={onToggleServerStatus}
                        disabled={mutationStatus === 'pending'}
                        variant={
                            mockStatus === 'offline' ? 'default' : 'destructive'
                        }
                        className="w-full">
                        {mutationStatus === 'pending' ? (
                            <Spinner />
                        ) : mockStatus === 'offline' ? (
                            'Start Server'
                        ) : (
                            'Stop Server'
                        )}
                    </Button>

                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>
                                Are you sure you want to stop the server?
                            </DialogTitle>
                            <DialogDescription>
                                Players currently connected will be
                                disconnected, and any unsaved progress may be
                                lost.
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button
                                    type="button"
                                    variant="destructive"
                                    onClick={toggleStatus}>
                                    Stop Server
                                </Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </CardFooter>
        </Card>
    );
}
