import ReactToPrint from 'react-to-print';
import React, { useRef } from 'react';

import ComponentToPrint from './ComponentToPrint';

const Cv = () => {
  const componentRef = useRef();
  return (
    <>
      <h2>Životopis</h2>
      <ComponentToPrint ref={componentRef} />
      <div className="center">
        <ReactToPrint
          trigger={() => (
            <button className="button ">VYTISKNOUT ŽIVOTOPIS</button>
          )}
          content={() => componentRef.current}
        />
      </div>
      <div className="center figma">
        <a
          href="https://www.figma.com/file/cVkJFgbxO9VTppxduzrz7H/CV?node-id=0%3A1"
          target="_blank"
          rel="noreferrer"
        >
          <button className="button button--targetBlank">Figma</button>
        </a>
      </div>
    </>
  );
};

export default Cv;
