import { IUnit } from '../interfaces/IUnit';
import SortAndOrder from './SortAndOrder';
import TableList from './TableList';

interface Props {
  units: IUnit[];
}

const Dashboard = ({ units }: Props) => {
  return (
    <>
      <section className="flex justify-between flex-wrap gap-3 mb-5">
        <label htmlFor="filterById" className="flex gap-x-4 items-baseline">
          <span className="font-bold text-sm">Filters by ID:</span>
          <input
            id="filterById"
            type="text"
            placeholder="ex: 45785"
            className="placeholder:text-xs placeholder:font-light placeholder:text-gray-300 rounded-sm border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm shadow-sm px-2 py-2"
          />
        </label>
        <SortAndOrder />
      </section>
      <TableList units={units} />
    </>
  );
};

export default Dashboard;
