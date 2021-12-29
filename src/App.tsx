import React, {ChangeEvent, useCallback, useEffect } from 'react';
// import styles from './App.module.scss';
import fileUpload from './services/file-upload';

const App: React.FC = () => {
  // const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    /* const ctx = canvas.current!.getContext('2d');
    console.log(ctx);
    if (ctx) {
      ctx.fillStyle = '#f00';
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(100, 50);
      ctx.lineTo(50, 100);
      ctx.lineTo(0, 90);
      ctx.closePath();
      ctx.fill();
    }
 */
  }, [])

  const fileChange = useCallback(({target}: ChangeEvent<HTMLInputElement>) => {
    fileUpload(target.files![0]);
  }, [])
  
  return (
    <div>
      <form>
        <label>
          file:
          <input  type="file" name="file" accept=".json" onChange={fileChange} />
        </label>
      </form>

      <svg height="100" width="100">
      <path stroke="black" strokeWidth="1" fill="lightcyan" fillRule="evenodd" fillOpacity="1"   d="
M97.558,22.9873 L97.655,22.9866 L97.744,22.9843 L97.84,22.9796 L97.918,22.9743 L98.005,22.9677 L98.061,22.9614 L98.106,22.953 L98.114,22.9447 L98.118,22.9377 L98.095,22.9293 L98.048,22.9177 L97.999,22.91 L97.931,22.9042 L97.841,22.8989 L97.762,22.8954 L97.675,22.8899 L97.613,22.8854 L97.501,22.8791 L97.408,22.8751 L97.311,22.8735 L97.217,22.8727 L97.112,22.8719 L97.009,22.8703 L96.897,22.8705 L96.805,22.8719 L96.699,22.8751 L96.624,22.8774 L96.533,22.8805 L96.41,22.8881 L96.322,22.8962 L96.269,22.9042 L96.243,22.9143 L96.218,22.9255 L96.218,22.9325 L96.27,22.9399 L96.325,22.9453 L96.431,22.9538 L96.505,22.9578 L96.574,22.9626 L96.655,22.9671 L96.73,22.9708 L96.8,22.9745 L96.856,22.9764 L96.987,22.9807 L97.105,22.9835 L97.206,22.9845 L97.29,22.9857 L97.381,22.986 L97.468,22.9866 L97.558,22.9873 z" >
</path>
      </svg>

      {/* <canvas ref={canvas} className={styles.canvas} width="24035178" height="24035178"></canvas> */}
    </div>
  );
};

export default App;
