"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import {
  LoaderCircle,
} from "lucide-react";

export default function SubmitButton({ children, className, pending, label, pendingLabel, ...props }) {
  let comp = <span>{label}</span>;

  if (children) {
    comp = <div className="flex items-center gap-x-0.5">
      {children ? children : 'null'}
    </div>
  } else if (pending) {
    comp = <div className="flex items-center gap-x-2" >
      <LoaderCircle size={18} className="animate-spin" />
      <span>{pendingLabel}</span>
    </div>
  }

  return (
    <Button
      type="submit"
      className={cn('', className)}
      {...props}
    >
      {comp}
    </Button >
  );
}