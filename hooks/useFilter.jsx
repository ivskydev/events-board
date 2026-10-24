import { 
  useState, 
  useMemo,
} from "react";

import { generateDummyId } from "@/lib/utils";
import filterBy from "@/lib/filterBy";

const getInitialState = () => {
  return {
    id: generateDummyId(),
    filters: new Map(),
  };
};

export default function useFilter(data, onFilter) {
  const [state, setState] = useState(getInitialState);

  const filteredData = useMemo(() => {
    const filters = Array.from(state.filters.values());
    return filterBy(filters, data);
  }, [state.filters, data]);

  /**
   * Resets all filters to its initial state.
   * Generates a new dummy id (filterId) that 
   * could be used as a filters container's key
   * (in a div, for example) reseting all input 
   * fields, automatically.
  */
  const clearFilters = () => {
    const initialState = getInitialState();
    setState(initialState);
  };

  const handleSetState = (newFilter) => {
    const currentFilters = new Map(state.filters);
    const hasSearchTerm = newFilter.criteria.searchTerm.length > 0;
    const filterId = newFilter.id;

    if (hasSearchTerm) {
      delete newFilter.id;
      currentFilters.set(filterId, newFilter);
    } else {
      if (currentFilters.has(filterId)) {
        currentFilters.delete(filterId);
      }
    }

    setState(prev => ({
      ...prev,
      filters: currentFilters,
    }))
  };

  return {
    filteredData,
    filterId: state.id,
    isFiltered: state.filters.size > 0,
    setFilters: handleSetState,
    clearFilters,
  };
}