import { z } from 'zod';
import { MinecraftServerSchema } from './schemas';
export type GameServer = z.infer<typeof MinecraftServerSchema>;
