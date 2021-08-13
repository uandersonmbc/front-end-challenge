import styles from "./styles.module.scss";

export default function Filter() {
  return (
    <div className="filter-container">
      <div className="filter-header">
        <div className="filter-header-title">Filter</div>
        <div className="filter-header-close" onClick={() => {}}>
          <i className="fa fa-times" />
        </div>
      </div>
      <div className="filter-content">
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((index) => (
          <span key={index} className={styles.genre}>
            Test {index}
          </span>
        ))}
      </div>
    </div>
  );
}
