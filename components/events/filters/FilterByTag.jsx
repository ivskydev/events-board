import { useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandList,
  CommandInput,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Check, PlusCircleIcon } from "lucide-react";

import { defaultTags } from "@/assets/dummy-data";

export default function FilterByTag({ onFilter }) {
  const [selectedValues, setSelectedValues] = useState(new Set());
  const [open, setOpen] = useState(false);

  const handleSelectedValue = (tag) => {
    const newSelectedValues = new Set(selectedValues);

    if (tag) {
      if (newSelectedValues.has(tag)) {
        newSelectedValues.delete(tag);
      } else {
        newSelectedValues.add(tag);
      }
    } else {
      newSelectedValues.clear();
    }

    setSelectedValues(newSelectedValues);

    onFilter({
      id: 'tags',
      predicateFn: (tag, searchTerm) => searchTerm.indexOf(tag) >= 0,
      criteria: {
        searchTerm: [...newSelectedValues],
        props: ['tag']
      }
    });
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 border-dashed">
          <PlusCircleIcon className="mr-2 h-4 w-4 text-slate-500" />
          <span className="text-slate-600">Filter by tag</span>
          {selectedValues?.size > 0 && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />
             
              <div className="hidden space-x-1 lg:flex">
                <Badge
                  variant="secondary"
                  className="rounded-sm px-1 font-normal"
                >
                  {selectedValues.size} selected
                </Badge>
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="end">
        <Command>
          <CommandInput placeholder="Search tags..." />
          <CommandEmpty>No tags found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {defaultTags.map(tag => (
                <CommandItem
                  key={tag.id}
                  value={tag.label}
                  onSelect={handleSelectedValue}
                >
                  <div
                    className={cn(
                      "w-4 h-4 flex items-center justify-center mr-2 rounded-sm border border-slate-400",
                      selectedValues.has(tag.label)
                        ? "bg-white text-primary-foreground"
                        : "opacity-50 [&_svg]:invisible"
                    )}
                  >
                    <Check
                      size={15}
                      className={cn(
                        "text-slate-500",
                        selectedValues.has(tag.label) ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </div>
                  {tag.label}
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
          {selectedValues.size > 0 && (
            <>
              <CommandSeparator />
              <CommandGroup>
                <CommandList>
                  <CommandItem
                    className="justify-center text-center"
                    onSelect={() => handleSelectedValue(undefined)}
                  >
                    Clear filters
                  </CommandItem>
                </CommandList>
              </CommandGroup>
            </>
          )}
        </Command>
      </PopoverContent>
    </Popover>
  )
}