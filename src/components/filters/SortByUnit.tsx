import styles from "./styles.module.scss";
import Image from "next/image";

type IProps={
  sortUnit:Function
}
const SortByUnit = (props:IProps) => {
const {sortUnit}=props;

  const handleSort=(event:React.ChangeEvent<HTMLSelectElement>)=>{
    sortUnit(event.target.value)
  }


  return (
    <div className={styles.sortByUnit}>
      <Image src="/imgs/filter.svg" alt="filter" width={25} height={25} />

      <label className={styles.title}>Sort by : </label>
      <select name="unit" className={styles.select} onChange={handleSort} data-testid="sortByUnit">
        <option value="unit_id">Unit ID</option>
        <option value="unit_type">Unit Type</option>
        <option value="unit_price">Unit Price</option>
      </select>
    </div>
  );
};

export default SortByUnit;
