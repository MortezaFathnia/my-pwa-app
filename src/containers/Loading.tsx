import React from 'react';
import ReactDOM from 'react-dom';
import Loader from 'react-loader-spinner';
const loadingRoot: any = document.getElementById('loading');

const Loading = () => {
  return ReactDOM.createPortal(
    <div className="pt-3 text-center">
      <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
    </div>,
    loadingRoot
  );
};

export default React.memo(Loading);
