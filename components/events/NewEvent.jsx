"use client";

import { useState } from "react";

import useForm from "@/hooks/useForm";
import SubmitFormButton from "@/components/events/SubmitFormButton";
import { createEventAction } from "@/actions/actions";
import { defaultPriorities, defaultTags } from "@/assets/dummy-data";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Plus,
  Loader2,
  CalendarCheck,
  CircleAlert,
} from "lucide-react";

export default function NewEvent({ column, onLoadingNewEvent }) {
  const [open, setOpen] = useState(false);

  const onSuccess = () => {
    onLoadingNewEvent(true);
    setOpen(false);
  };

  const { 
    formState, 
    handleSubmit, 
    resetErrors 
  } = useForm(createEventAction, onSuccess);

  return (
    <Drawer open={open} onOpenChange={setOpen} onClose={resetErrors} >
      <DrawerTrigger asChild>
        <Button 
          variant="ghost" 
          className="h-auto p-0 hover:text-slate-600 hover:bg-transparent"
        >
          <Plus size="20" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <form onSubmit={handleSubmit} method="POST">
          <input type="hidden" name="column" value={column} />

          <div className="w-full max-w-sm mx-auto pb-5">
            <DrawerHeader>
              <DrawerTitle className="text-slate-700">New Event</DrawerTitle>
              <DrawerDescription>Create a new event</DrawerDescription>
              {formState.error && (
                <div className="my-2 flex items-center gap-x-1.5 text-rose-500">
                  <CircleAlert size={18} />
                  <span>{formState.message}!</span>
                </div>
              )}
            </DrawerHeader>
            <div className="flex flex-col gap-y-4 p-4 pb-0">
              <Input name="title" type="text" placeholder="Title" />
              <Input name="desc" type="text" placeholder="Description" />

              <Select name="tag">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Tag" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Tags</SelectLabel>
                    {defaultTags.map(tag =>
                      <SelectItem
                        key={tag.id}
                        value={tag.label}
                        className="hover:bg-slate-50 data-[state=checked]:bg-slate-50 data-[highlighted]:bg-slate-50 cursor-pointer"
                      >
                        <span className="capitalize">{tag.label}</span>
                      </SelectItem>
                    )}
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Select name="priority">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Priority</SelectLabel>
                    {Object.keys(defaultPriorities).map(key =>
                      <SelectItem
                        key={key}
                        value={key}
                        className="hover:bg-slate-50 data-[state=checked]:bg-slate-50 data-[highlighted]:bg-slate-50 cursor-pointer"
                      >
                        <span className="capitalize">{defaultPriorities[key].label}</span>
                      </SelectItem>
                    )}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <DrawerFooter>
              <SubmitFormButton
                variant="outline"
                className="text-sm text-slate-50 bg-slate-900 hover:bg-slate-800 hover:text-slate-50"
                label="Create Event"
                pendingLabel="Creating..."
                disabled={formState.pending}
              >
                <>
                  {formState.pending ? (
                    <>
                      <Loader2 size="16" className="animate-spin" />
                      <span className="pl-1">Creating...</span>
                    </>
                  ) : (
                    <>
                      <CalendarCheck size="14" />
                      <span className="pl-1">Create Event</span>
                    </>
                  )}
                </>
              </SubmitFormButton>

              <DrawerClose asChild>
                <Button
                  variant="outline"
                  className="text-slate-500 hover:text-slate-500"
                >
                  Cancel
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </form>
      </DrawerContent>
    </Drawer >
  )
}