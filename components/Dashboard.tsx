import { IUnit } from '../interfaces/IUnit';
import { FilterInput } from './FilterInput';
import SortAndOrder from './SortAndOrder';
import TableList from './TableList';

interface Props {
  units: IUnit[];
}

const Dashboard = ({ units }: Props) => {
  return (
    <>
      <section className="flex justify-between flex-wrap gap-3 mb-5">
        <FilterInput />
        <SortAndOrder />
      </section>
      <TableList units={units} />
    </>
  );
};

export default Dashboard;
