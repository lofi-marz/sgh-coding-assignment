import { z } from 'zod';
const playerCountRegex = /^\d+\/\d+$/;

const PlayerCountSchema = z.custom<`${number}/${number}`>(
    (val) => typeof val === 'string' && playerCountRegex.test(val)
);

const RegionSchema = z.union([
    z.literal('Europe'),
    z.literal('Asia'),
    z.literal('North America'),
    z.literal('South America'),
]);
export const MinecraftServerSchema = z.object({
    id: z.number(),
    name: z.string(),
    game: z.literal('Minecraft'), //The only game present at the moment is Minecraft, when more are supported, this should be changed to a Union
    players: PlayerCountSchema,
    status: z.literal('offline').or(z.literal('online')),
    version: z.string(),
    type: z
        .literal('Survival')
        .or(z.literal('Creative'))
        .or(z.literal('Hardcore'))
        .or(z.literal('Modded'))
        .or(z.literal('Technical')),
    region: RegionSchema,
    mods: z.array(z.string()),
});
export const GetServersResponseSchema = z.array(MinecraftServerSchema);
