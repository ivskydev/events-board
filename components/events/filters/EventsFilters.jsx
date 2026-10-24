import { useEffect, useContext, createContext } from "react";

import useFilter from "@/hooks/useFilter";
import FilterBySearch from "@/components/events/filters/FilterBySearch";
import FilterByPriority from "@/components/events/filters/FilterByPriority";
import FilterByTag from "@/components/events/filters/FilterByTag";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const FiltersContext = createContext();

const EventsFilters = ({ data, onFilter, showClearFilters = true, className, children }) => {
  const {
    filteredData: events,
    filterId,
    isFiltered,
    setFilters,
    clearFilters
  } = useFilter(data);

  const contextValue = {
    events,
    filterId,
    isFiltered,
    setFilters,
    clearFilters,
  };

  useEffect(() => {
    onFilter(events);
  }, [events]);

  return (
    <FiltersContext.Provider value={contextValue}>
      <div key={filterId} className={cn('flex items-center justify-between gap-4', className)}>
        {children}
      </div>
    </FiltersContext.Provider>
  );
};

const Search = () => {
  const { setFilters } = useContext(FiltersContext);

  return (
    <FilterBySearch onFilter={setFilters} />
  );
};

const Tags = () => {
  const { setFilters } = useContext(FiltersContext);

  return (
    <FilterByTag onFilter={setFilters} />
  );
};

const Priorities = () => {
  const { setFilters } = useContext(FiltersContext);

  return (
    <FilterByPriority onFilter={setFilters} />
  );
};

EventsFilters.Search = Search;
EventsFilters.Tags = Tags;
EventsFilters.Priorities = Priorities;
export default EventsFilters;