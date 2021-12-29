import React, { useCallback, useMemo, useState, SyntheticEvent, useEffect } from 'react';
import { connect } from "react-redux";
import { AreasState } from '../../features/areas/areasSlice';
import { RootState } from "../../store/store";
import styles from './displayAreas.module.scss';
import Areas from './areas';

interface DisplayAreasProps {
  areas: AreasState;
}

const DisplayAreas: React.FC<DisplayAreasProps> = ({ areas }) => {
  const [selected, setSelected] = useState<string>();
  const categories = useMemo(() => Object.keys(areas), [areas]);

  useEffect(() => {
    if (categories.length > 0) {
      setSelected(categories[0]);
    }
  }, [])

  const handleClick = useCallback((event: SyntheticEvent<HTMLButtonElement>) => {
    if (!(event.target instanceof HTMLButtonElement)) {
      return;
    }
    setSelected(event.target.dataset.value);
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        <div className={styles.category}>
          {categories.map((category) => (
            <button 
              key={category} 
              onClick={handleClick}
              data-value={category} 
              data-selected={selected === category}
            >
                {category}
            </button>
          ))}
        </div>

        <div className={styles.areas}>
          {selected && <Areas category={selected}/>}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ areas }: RootState) => ({ areas });

export default connect(mapStateToProps)(DisplayAreas);