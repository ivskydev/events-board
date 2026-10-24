import { useState } from "react";

import { useDebounceCallback } from "@/hooks/useDebounce";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function FilterBySearch({ onFilter }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleOnSearch = useDebounceCallback((value) => {
    onFilter({
      id: 'search',
      predicateFn: (props, searchTerm) => props.includes(searchTerm),
      criteria: {
        searchTerm: value,
        props: ['tag', 'title', 'desc']
      }
    });
  }, 300, [onFilter]);

  const handleOnChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    handleOnSearch(value.trim());
  };

  return (
    <div className="relative flex grow">
      <Input
        className="max-w-[280px] focus:max-w-[calc(285px*2)] border border-slate-300 rounded-full px-4 pl-[42px] transition-all duration-300 transform outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        type="text"
        name="searchTerm"
        value={searchTerm}
        autoComplete="off"
        placeholder="Search..."
        onChange={handleOnChange}
      />

      <Search
        className="absolute top-[9px] left-3.5 stroke-slate-300"
        size={21}
      />
    </div>
  );
}