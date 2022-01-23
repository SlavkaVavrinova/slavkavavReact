import ReactToPrint from 'react-to-print';
import React, { useRef } from 'react';

import ComponentToPrint from './ComponentToPrint';

const Cv = () => {
  const componentRef = useRef();
  return (
    <>
      <ComponentToPrint ref={componentRef} />
      <div className="button__cv">
        <ReactToPrint
          trigger={() => (
            <button className="button ">VYTISKNOUT ŽIVOTOPIS</button>
          )}
          content={() => componentRef.current}
        />
      </div>
    </>
  );
};

export default Cv;
