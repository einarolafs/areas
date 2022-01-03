import React from 'react'
import { connect } from 'react-redux';
import { RootState } from '../../store/store';

import styles from './areas.module.scss';

export interface AreasProps {
  category: string;
  areas?: number[];
}

const numberFormat = new Intl.NumberFormat('de-DE');

const Areas: React.FC<AreasProps> = ({ areas }) => {
  return <>
    {areas?.map((area) => (
      <div key={area} data-testid="area" className={styles.container}>
        {numberFormat.format(area)}
      </div>
    ))}
  </>
}

const mapStateToProps = (state: RootState, { category }: AreasProps): AreasProps => {
  const areas = [...(state.areas[category].areas || [])].sort((a, b) => b - a);

  return {
    areas,
    category,
  }
}

export default connect(mapStateToProps)(Areas)
export { Areas };