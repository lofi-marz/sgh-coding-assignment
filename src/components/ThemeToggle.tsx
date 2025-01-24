'use client';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { Sun, Moon, LaptopMinimal } from 'lucide-react';
import { cn } from '@/lib/utils';
const icons = {
    light: Sun,
    dark: Moon,
    system: LaptopMinimal,
};
import { motion } from 'motion/react';

/**
 * Button to toggle the theme between light, dark and system
 */
export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="grid grid-cols-3 rounded-full border border-border bg-muted">
            {['light', 'dark', 'system'].map((t) => {
                const Icon =
                    t in icons ? icons[t as keyof typeof icons] : icons.light;
                return (
                    <Button
                        key={t}
                        onClick={() => setTheme(t)}
                        size="icon"
                        className={cn(
                            'relative rounded-full bg-transparent text-muted-foreground hover:bg-primary/10',
                            theme === t
                                ? 'text-primary-foreground'
                                : 'shadow-none'
                        )}>
                        {theme === t && (
                            <motion.div
                                layoutId="theme-active"
                                layout
                                className="absolute inset-0 rounded-full bg-primary"
                            />
                        )}
                        <Icon className="z-10" />
                    </Button>
                );
            })}
        </div>
    );
}
