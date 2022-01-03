import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useDispatch } from 'react-redux'
import { fetchAreas } from '../../features/areas/areasSlice';

import styles from './uploadFile.module.scss';

const UploadFile: React.FC = () => {
  const dispatch = useDispatch();

  const onDrop = useCallback((files: File[]) => {
    dispatch(fetchAreas(files[0]));
  }, [])

  const { getRootProps, getInputProps } = useDropzone({ 
    onDrop,
    accept: 'application/json',
  });

  return (
    <div className={styles.dropZoneContainer}>
      <div
        data-testid="dropzone"
        {...getRootProps({
          className: `${styles.dropZone} dropzone`,
        })}
      >
        <input {...getInputProps()} data-testid="dropzone-input" />
        <p>Drag n drop some files here, or click to select files</p>
      </div>
    </div>
  );
};

export default UploadFile;