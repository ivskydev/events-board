"use client";

import { useState } from "react";

import useForm from "@/hooks/useForm";
import SubmitFormButton from "@/components/events/SubmitFormButton";
import ButtonLink from "@/components/events/ButtonLink";

import StackedAvatars from "@/components/StackedAvatars";
import { updateEventAction } from "@/actions/actions";

import {
  defaultPriorities,
  defaultTags,
  people,
} from "@/assets/dummy-data";

import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  CircleAlert,
  MessageCircle,
  Paperclip,
} from "lucide-react";

export default function UpdateEventForm({ event }) {
  const [isFormEdited, setIsFormEdited] = useState(false);

  const { 
    formState, 
    handleSubmit,
    resetErrors,
  } = useForm(updateEventAction);

  const handleOnChange = () => {
    setIsFormEdited(true);
    resetErrors();
  };

  const peopleList = people.map(p => ({
    label: p.name,
    image: p.imageUrl
  }));

  return (
    <form className="mt-5" onSubmit={handleSubmit} onChange={handleOnChange} method="POST">
      <input type="hidden" name="id" value={event.id} />

      <div className="grid w-full items-center gap-y-4">
        <div className="space-y-1">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            type="text"
            placeholder="Event title"
            defaultValue={event.title}
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="desc">Description</Label>
          <Textarea
            id="desc"
            name="desc"
            placeholder="Event deccription..."
            defaultValue={event.desc}
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="tag">Tag</Label>
          <Select name="tag" defaultValue={event.tag}>
            <SelectTrigger id="tag" className="w-full">
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
        </div>

        <div className="space-y-1">
          <Label htmlFor="priority">Priority</Label>
          <Select name="priority" defaultValue={event.priority}>
            <SelectTrigger id="priority" className="w-full">
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Priority</SelectLabel>
                {Object.keys(defaultPriorities).map(key =>
                  <SelectItem
                    key={key}
                    value={key}
                    className="data-[state=checked]:bg-slate-50 data-[highlighted]:bg-slate-50 cursor-pointer"
                  >
                    <span className="capitalize">{defaultPriorities[key].label}</span>
                  </SelectItem>
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-7 mb-10 flex items-center justify-between">
        <StackedAvatars
          limit={4}
          items={peopleList}
        />

        <div className="flex items-center justify-end gap-x-4 text-slate-500">
          <div className="flex items-center gap-x-1">
            <Paperclip size="16" />
            <small className="text-xs text-slate-600">{event.attachments.length}</small>
          </div>

          <div className="flex items-center gap-x-1">
            <MessageCircle size="16" />
            <small className="text-xs text-slate-600">{event.comments.length}</small>
          </div>
        </div>
      </div>

      {formState?.error && (
        <div className="my-2 flex items-center justify-end  gap-x-1.5 text-rose-500">
          <CircleAlert size={18} />
          <span>{formState.message}!</span>
        </div>
      )}

      <div className="mt-2 flex justify-between">
        <ButtonLink
          href="/events"
          disabled={formState.pending}
        >
          Cancel
        </ButtonLink>

        <SubmitFormButton
          label="Update"
          pendingLabel="Updating..."
          pending={formState.pending}
          disabled={!isFormEdited || formState.pending}
        />
      </div>
    </form>
  );
}