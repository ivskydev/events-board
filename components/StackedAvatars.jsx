"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "@/components/ui/avatar";

import { cn } from "@/lib/utils";

export default function StackedAvatars({ className, items, maxItems = 4 }) {
  const totalItems = items.length;
  const remainingItems = Math.abs(items.length - maxItems);

  return (
    <div className={cn('flex -space-x-2', className)}>
      {items.slice(0, maxItems).map((item, index) =>
        <Avatar
        key={item.image + index}
        className="flex h-8 w-8 bg-white rounded-full ring-2 ring-white"
        >
          <AvatarImage src={item.image} />
          <AvatarFallback
            className="text-xs font-semibold text-purple-600 bg-purple-100">
            {item.label.substring(0, 2)}
          </AvatarFallback>
        </Avatar>
      )}

      {totalItems > maxItems &&
        <span className="relative shrink-0 flex h-8 w-8 bg-white rounded-full ring-2 ring-white overflow-hidden">
          <span className="flex h-full w-full items-center justify-center rounded-full text-xs font-semibold text-purple-600 bg-purple-100">
            +{remainingItems}
          </span>
        </span>
      }
    </div>
  );
}
