import { MinecraftServerType } from '@/types';
import { Settings, Beef, Gem, Binary, Skull } from 'lucide-react';
import { ComponentProps } from 'react';
const iconMap = {
    Technical: Settings,
    Survival: Beef,
    Creative: Gem,
    Modded: Binary,
    Hardcore: Skull,
} satisfies Record<MinecraftServerType, React.FC>;
export function ServerTypeIcon({
    type,
    ...props
}: { type: MinecraftServerType } & ComponentProps<'svg'>) {
    const Icon = iconMap[type] ?? Skull;
    return <Icon {...props} />;
}
