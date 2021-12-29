import React from 'react';
import { connect } from "react-redux";
import styles from './App.module.scss';
import UploadFile from './components/uploadFile/uploadFile';
import { RootState } from './store/store';
import { AnnotationState } from './features/annotations/annotationsSlice';
import DisplayAreas from './components/displayAreas/displayAreas';
import Logo from './components/logo/logo';

interface AppProps {
  annotations: AnnotationState;
}

const App: React.FC<AppProps> = ({ annotations }) => (
  <div className={styles.container}>
    <div className={styles.header}><Logo/></div>
    {Object.keys(annotations).length <= 0 ? <UploadFile/> : <DisplayAreas/>}
  </div>
);

const mapStateToProps = ({ annotations }: RootState) => ({ annotations });

export default connect(mapStateToProps)(App);
