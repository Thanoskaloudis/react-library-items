import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Card } from '../Card/Card';

describe('<Selection />', () => {
  let mockTitle = 'test';
  let mockImgURL = 'image test url'
  let mockDuration = '10 mins'
  let mockType = 'test pathway';
  let mockLink = 'test link';
  let mockDescription = 'test description';

  const component = renderer.create(<Card
            title={mockTitle}
            imgURL={mockImgURL}
            duration={mockDuration}
            type={mockType}
            link={mockLink}
            description={mockDescription}
        />);

  it('Should render correctly', () => {
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should have the correct image url', () => {
    render(<Card
      title={mockTitle}
      imgURL={mockImgURL}
      duration={mockDuration}
      type={mockType}
      link={mockLink}
      description={mockDescription}
  />);

    const image: HTMLImageElement = screen.getByRole('img', {});

    expect(image).toHaveAttribute('src', mockImgURL);
  });

  it('should render the header and required input', () => {
    render(<Card
      title={mockTitle}
      imgURL={mockImgURL}
      duration={mockDuration}
      type={mockType}
      link={mockLink}
      description={mockDescription}
  />);

    expect(screen.getByTestId('cardTitle')).toBeTruthy();
    expect(screen.getByText(mockTitle)).toBeTruthy();
  });

  it('should render card with the correct duration and type', () => {
    render(<Card
      title={mockTitle}
      imgURL={mockImgURL}
      duration={mockDuration}
      type={mockType}
      link={mockLink}
      description={mockDescription}
  />);

  const subTitle = screen.getByTestId('cardSubTitle');

  expect(subTitle.textContent).toEqual(`  ${mockType} • ${mockDuration}`);
  });

  it('should render card with the correct card link', () => {
    render(<Card
      title={mockTitle}
      imgURL={mockImgURL}
      duration={mockDuration}
      type={mockType}
      link={mockLink}
      description={mockDescription}
  />);

  const link = screen.getByTestId('cardLink');

  expect(link).toHaveAttribute('href', mockLink);
  });
});
