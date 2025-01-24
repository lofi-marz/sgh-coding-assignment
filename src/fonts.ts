import { Noto_Emoji } from 'next/font/google';
//Used for the monochromatic emoji in the region display
export const notoEmoji = Noto_Emoji({
    weight: 'variable',
    variable: '--font-noto-emoji',
});
