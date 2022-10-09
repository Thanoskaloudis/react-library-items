import renderer from 'react-test-renderer';
import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';
import { CardItems } from '../CardItems/CardItems';

const mockItems = [
  {
    id: 12,
    title: 'KS4',
    internal_title: 'KS4',
    url: 'https://www.blackbullion.com/pathways/key-stage-4',
    intro: '',
    duration: '9 min',
    image:
      'https://prodcontent.blackbullion.com/images/pathways/12/thumb',
    type: 'pathway',
    has_summative_assessment: false,
  },
  {
    id: 14,
    title: 'KS4',
    internal_title: 'KS4',
    url: 'https://www.blackbullion.com/pathways/key-stage-4',
    intro: '',
    duration: '9 min',
    image:
      'https://prodcontent.blackbullion.com/images/pathways/12/thumb',
    type: 'pathway',
    has_summative_assessment: false,
  },
  {
    id: 21,
    title: 'KS4',
    internal_title: 'KS4',
    url: 'https://www.blackbullion.com/pathways/key-stage-4',
    intro: '',
    duration: '9 min',
    image:
      'https://prodcontent.blackbullion.com/images/pathways/12/thumb',
    type: 'pathway',
    has_summative_assessment: false,
  },
  {
    id: 16,
    title: 'KS4',
    internal_title: 'KS4',
    url: 'https://www.blackbullion.com/pathways/key-stage-4',
    intro: '',
    duration: '9 min',
    image:
      'https://prodcontent.blackbullion.com/images/pathways/12/thumb',
    type: 'pathway',
    has_summative_assessment: false,
  },
];

describe('<Selection />', () => {
  const component = renderer.create(<CardItems items={mockItems} />);

  it('Should render correctly', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
