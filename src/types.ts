import { z } from 'zod';
import { MinecraftServerSchema } from './schemas';
export type GameServer = z.infer<typeof MinecraftServerSchema>;
export type GameName = GameServer['game'];
export type PropsWithClassname = { className?: string };
export type GameServerStatus = GameServer['status'];
export type GameServerPlayerCount = GameServer['players'];
export type ServerRegion = GameServer['region'];
export type MinecraftServerType = GameServer['type'];
