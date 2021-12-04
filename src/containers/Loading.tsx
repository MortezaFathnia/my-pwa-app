import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Loader from 'react-loader-spinner';

const Loading = () => {
  
  return (
    <div className="pt-3 text-center">
      <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
    </div>)
};

export default React.memo(Loading);
