import { StaticImageData } from 'next/image';
import { GameName } from './types';
import minecraft from '@/assets/minecraft.avif';
export const GAME_LOGO_MAP = {
    Minecraft: minecraft,
} satisfies Record<GameName, StaticImageData>;
export const API_URL = '/api/mock';
export const BASE_URL = 'http://localhost:3000';
