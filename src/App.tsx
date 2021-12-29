import React, { useCallback } from 'react';
import Dropzone from 'react-dropzone';
import { useDispatch } from 'react-redux'
import { fetchAnnotations } from './features/annotations/annotationsSlice';
import styles from './App.module.scss';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const fileDrop = useCallback((files: File[]) => {
    dispatch(fetchAnnotations(files[0]));
  }, [])
  
  return (
    <div>
      <Dropzone onDrop={fileDrop}>
        {({getRootProps, getInputProps}) => (
          <div className={styles.dropZone}>
            <div
              {...getRootProps({
                className: 'dropzone',
                onDrop: event => event.stopPropagation()
              })}
            >
              <input {...getInputProps()} />
              <p>Drag n drop some files here, or click to select files</p>
            </div>
          </div>
        )}
      </Dropzone>
    </div>
  );
};

export default App;
