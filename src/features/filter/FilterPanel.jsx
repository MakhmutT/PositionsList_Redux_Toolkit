import { useSelector, useDispatch } from 'react-redux';
import { clearFilters, removeFilter, selectFilters } from './filter-slice';


import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';


const FilterPanel = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);

  if (currentFilters.length === 0) {
    return null
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map(filter => {
            return <Badge key={filter} variant="clearable" onClear={() => dispatch(removeFilter(filter))}>{filter}</Badge>
          })}
        </Stack>

        <button className='link' onClick={() => dispatch(clearFilters())}>Clear</button>
      </div>
    </Card>
  )
}

export { FilterPanel };