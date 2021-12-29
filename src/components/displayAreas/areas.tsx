import React from 'react'
import { connect } from 'react-redux';
import { RootState } from '../../store/store';

interface AreasProps {
  category: string;
  areas?: number[];
}

const Areas: React.FC<AreasProps> = ({ areas }) => {
  return <>
    {areas?.map((area) => (
      <div key={area}>
        {new Intl.NumberFormat('de-DE').format(area)}
      </div>
    ))}
  </>
}

const mapStateToProps = (state: RootState, { category }: AreasProps): AreasProps => {
  const areas = [...(state.annotations[category] || [])].sort((a, b) => b - a);

  return {
    areas,
    category,
  }
}

export default connect(mapStateToProps)(Areas)