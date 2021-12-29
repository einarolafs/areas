import React, { useCallback, useMemo, useState, SyntheticEvent } from 'react';
import { connect } from "react-redux";
import { AnnotationState } from '../../features/annotations/annotationsSlice';
import { RootState } from "../../store/store";
import styles from './displayAreas.module.scss';
import Areas from './areas';

interface DisplayAreasProps {
  annotations: AnnotationState;
}

const DisplayAreas: React.FC<DisplayAreasProps> = ({ annotations }) => {
  const [selected, setSelected] = useState<string>();
  const categories = useMemo(() => Object.keys(annotations), [annotations]);

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

const mapStateToProps = ({ annotations }: RootState) => ({ annotations });

export default connect(mapStateToProps)(DisplayAreas);