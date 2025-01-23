import { StaticImageData } from 'next/image';
import { GameName, ServerRegion } from './types';
import minecraft from '@/assets/minecraft.avif';
export const GAME_LOGO_MAP = {
    Minecraft: minecraft,
} satisfies Record<GameName, StaticImageData>;
export const API_URL = '/api/mock';
export const BASE_URL = 'http://localhost:3000';
export const MOCK_STATUS_DELAY_MS = 1000;
export const REGION_EMOJI_MAP = {
    Asia: '🌏',
    Europe: '🌍',
    'North America': '🌎',
    'South America': '🌎',
} satisfies Record<ServerRegion, string>;
