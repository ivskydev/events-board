"use client";

/**
 * A wrapper around nextjs Link that supports
 * disable prop.
 */

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function ButtonLink({ children, className, href, ...props }) {
  return (
    <Button
      asChild
      variant="outline"
      className={cn('', className)}
      {...props}
    >
      {props.disabled ? (
        <button {...props}>{children}</button>
      ) : (
        <Link href={href} {...props}>{children}</Link>
      )}
    </Button>
  );
}