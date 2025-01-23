'use client';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';
import { CardTitle } from './ui/card';
const cardSectionVariants = cva('flex flex-col gap-1 text-sm', {
    variants: {
        variant: {
            padded: 'rounded-xl bg-muted px-4 py-4',
            inline: 'gap-3',
        },
    },
    defaultVariants: {
        variant: 'padded',
    },
});
export type ServerCardSectionProps = ComponentProps<'div'> &
    VariantProps<typeof cardSectionVariants> & { title: string };
export function ServerCardSection({
    title,
    variant,
    children,
    className,
}: ServerCardSectionProps) {
    return (
        <div className={cn(cardSectionVariants({ variant }), className)}>
            <CardTitle className="text-sm text-muted-foreground">
                {title}
            </CardTitle>
            {children}
        </div>
    );
}
