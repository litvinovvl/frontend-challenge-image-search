import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { ReactComponent as NoResultsIcon } from '../../assets/images/sad-face.svg';
import { ReactComponent as LoadingIcon } from '../../assets/images/think-face.svg';

import './style.scss';

const ImagesGrid = ({ images, isLoading, error }) => {
  const renderImages = () => {
    if (error) {
      return (
        <div className="spinner-wrapper">
          <NoResultsIcon width={48} hanging={48} />
          Something went wrong, try again
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="spinner-wrapper">
          <LoadingIcon width={48} hanging={48} />
          Loading
        </div>
      );
    }

    if (images && images.length) {
      return (
        <div className="images-wrapper">
          {
            images.map((image) => (
              <img key={image.id} src={image.webformatURL} alt={image.tags} />
            ))
          }
        </div>
      );
    }

    return (
      <div className="spinner-wrapper">
        <NoResultsIcon width={48} hanging={48} />
        No results found!
      </div>
    );
  };

  return (
    <div className={classNames('container', { hidden: !images })}>
      {renderImages()}
    </div>
  );
};

ImagesGrid.defaultProps = {
  images: null,
  isLoading: false,
  error: false,
};

ImagesGrid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  error: PropTypes.bool,
};

export default ImagesGrid;
