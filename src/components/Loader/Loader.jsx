import { Puff } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styles';
import { createPortal } from 'react-dom';

const portal = document.querySelector('#modal');

const Loader = () => {
  return createPortal(
    <LoaderWrapper>
      <Puff
        height="120"
        width="120"
        radius={1}
        color="#e2dedb"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderWrapper>,
    portal
  );
};

export default Loader;
