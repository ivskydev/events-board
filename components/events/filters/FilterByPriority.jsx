import { useState } from "react";

import { Checkbox } from "@/components/ui/checkbox"

const defaultPriorities = ['low', 'mid', 'high'];

const style = {
  low: {
    border: 'border-indigo-300',
  },
  mid: {
    border: 'border-amber-300',
  },
  high: {
    border: 'border-rose-300',
  }
};

export default function FilterByPriority({ onFilter }) {
  const [selectedValues, setSelectedValues] = useState(new Set());

  const handleOnCheckedChange = (checked, priority) => {
    const newSelectedValues = new Set(selectedValues);

    if (checked) {
      newSelectedValues.add(priority);
    } else {
      newSelectedValues.delete(priority);
    }

    setSelectedValues(newSelectedValues);

    onFilter({
      id: 'priorities',
      predicateFn: (priority, searchTerm) => searchTerm.indexOf(priority) >= 0,
      // predicateFn: (priority, priorities) => priorities.includes(priority),
      // predicateFn: (priority, priorities) => priorities.some(p => p === priority),
      criteria: {
        searchTerm: [...newSelectedValues],
        props: ['priority']
      }
    });
  };

  return (
    <div className="flex items-center space-x-4 select-none">
      {defaultPriorities.map(priority => (
        <label
          key={priority}
          htmlFor={priority}
          className="flex items-center space-x-1 cursor-pointer capitalize"
        >
          <Checkbox
            id={priority}
            name={priority}
            value={priority}
            checked={selectedValues.has(priority)}
            onCheckedChange={(checked) => handleOnCheckedChange(checked, priority)}
            className={`data-[state=checked]:bg-white [&>span>svg]:text-slate-900 ${style[priority].border}`}
          />
          <span className={`text-sm text-slate-600 font-medium`}>{priority}</span>
        </label>
      ))}
    </div>
  );
}