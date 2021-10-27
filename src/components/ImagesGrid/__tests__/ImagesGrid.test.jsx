import React from 'react';
import { shallow } from 'enzyme';

import ImagesGrid from '../ImagesGrid';

const image = { webformatURL: 'test_url', tags: 'tags' };
const images = [
  { ...image, id: 1 },
  { ...image, id: 2 },
];

const props = {
  isLoadding: false,
  error: false,
  images,
};

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render ImagesGrid properly initially', () => {
    const component = shallow(<ImagesGrid {...props} images={null} />);

    expect(component).toMatchSnapshot();
  });

  it('should render ImagesGrid properly when loading', () => {
    const component = shallow(<ImagesGrid {...props} isLoading />);

    expect(component).toMatchSnapshot();
  });

  it('should render ImagesGrid properly when error', () => {
    const component = shallow(<ImagesGrid {...props} error />);

    expect(component).toMatchSnapshot();
  });

  it('should render ImagesGrid properly when no images found', () => {
    const component = shallow(<ImagesGrid {...props} images={[]} />);

    expect(component).toMatchSnapshot();
  });

  it('should render ImagesGrid properly when images loaded', () => {
    const component = shallow(<ImagesGrid {...props} />);

    expect(component).toMatchSnapshot();
  });
});
