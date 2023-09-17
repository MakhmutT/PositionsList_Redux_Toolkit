import { useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import { addFilter } from 'features/filter/filter-slice';
import { useFetchPositions } from './useFetchPositions';
import { usePositions } from './usePositions';

const JobList = () => {
  useFetchPositions()

  const positions = usePositions()
  const dispatch = useDispatch();

  const handleAddFilter = (filter) => dispatch(addFilter(filter))
  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition key={item.id} handleAddFilter={handleAddFilter} {...item} />
      ))}
    </div>
  )
}

export { JobList };