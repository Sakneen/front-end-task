import { useState } from "react";
import styles from "./styles.module.scss";

type IProps = {
  filterId: Function;
};

const FilterById = (props: IProps) => {
  const { filterId } = props;

  const [value, setValue] = useState<string>('45678');

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
   
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    filterId(value);
  };
  
  return (
    <div className={styles.filterById}>
      <form onSubmit={handleSubmit}   data-testid="form">
        <label className={styles.title}>Filters by ID : </label>
       
        <input
         name='filter'
          className={styles.input}
          onChange={handleFilter}
          placeholder="ex:45678"
          data-testid="filterById"
          value={value}
        />
      </form>
    </div>
  );
};

export default FilterById;
