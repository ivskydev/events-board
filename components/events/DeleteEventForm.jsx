"use client";

import useForm from "@/hooks/useForm";
import SubmitFormButton from "@/components/events/SubmitFormButton";
import { deleteEventAction } from "@/actions/actions";

import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  X,
  CircleAlert,
} from "lucide-react";

export default function DeleteEventForm({ event }) {
  const { 
    formState, 
    handleSubmit,
  } = useForm(deleteEventAction);

  /**
   * Prevents the user from closing the dialog
   * (pressing the escape key) while calling
   * the deleteEventAction.
   */
  const handleOnEscapeKeyDown = (e) => {
    if (formState.pending) {
      e.preventDefault();
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          className="h-auto p-0 text-slate-500 hover:bg-transparent"
        >
          <X size="16" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent onEscapeKeyDown={handleOnEscapeKeyDown}>
        <form onSubmit={handleSubmit} method="POST">
          <input type="hidden" name="id" value={event.id} />

          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>

            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the event and remove it from our servers.
            </AlertDialogDescription>

            {formState.error && (
              <div className="my-2 flex items-center gap-x-1.5 text-rose-500">
                <CircleAlert size={18} />
                <span>{formState.message}!</span>
              </div>
            )}
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel disabled={formState.pending}>
              Cancel
            </AlertDialogCancel>

            <SubmitFormButton
              label="Delete"
              pendingLabel="Deleting..."
              pending={formState.pending}
              disabled={formState.pending}
            />
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}