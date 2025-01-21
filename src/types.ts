import { z } from 'zod';
import { MinecraftServerSchema } from './schemas';
export type GameServer = z.infer<typeof MinecraftServerSchema>;
export type GameName = GameServer['game'];
export type PropsWithClassname = { className?: string };
export type GameServerStatus = GameServer['status'];
