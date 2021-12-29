import React from 'react';
import { connect } from "react-redux";
import styles from './App.module.scss';
import UploadFile from './components/uploadFile/uploadFile';
import { RootState } from './store/store';
import { AreasState } from './features/areas/areasSlice';
import DisplayAreas from './components/displayAreas/displayAreas';
import Logo from './components/logo/logo';

interface AppProps {
  areas: AreasState;
}

const App: React.FC<AppProps> = ({ areas }) => (
  <div className={styles.container}>
    <div className={styles.header}><Logo/></div>
    {Object.keys(areas).length <= 0 ? <UploadFile/> : <DisplayAreas/>}
  </div>
);

const mapStateToProps = ({ areas }: RootState) => ({ areas });

export default connect(mapStateToProps)(App);
