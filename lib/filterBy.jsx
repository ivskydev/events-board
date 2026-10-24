export default function filterBy(filters, data) {
  const filteredResults = { ...data };

  if (filters && filters.length) {
    for (const filterKey in filters) {
      const { predicateFn, criteria: filter } = filters[filterKey];
      const props = filter.props.map(p => p.toLowerCase());

      const searchTerm = (
        typeof filter.searchTerm === 'string'
          ? filter.searchTerm.toLowerCase()
          : filter.searchTerm.map(s => s.toLowerCase())
      );

      if (searchTerm.length) {
        for (const key in filteredResults) {
          filteredResults[key] = filteredResults[key].filter(obj =>
            props.some(p => predicateFn(obj[p].toLowerCase(), searchTerm))
          );
        }
      }
    }
  }
  return filteredResults;
}