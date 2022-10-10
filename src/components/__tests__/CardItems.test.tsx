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
    title: 'Alex',
    internal_title: 'test1',
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
    title: 'Loren',
    internal_title: 'test2',
    url: 'https://www.blackbullion.com/pathways/key-stage-4',
    intro: '',
    duration: '25 min',
    image:
      'https://prodcontent.blackbullion.com/images/pathways/12/thumb',
    type: 'pathway',
    has_summative_assessment: false,
  },
  {
    id: 21,
    title: 'Rick',
    internal_title: 'test2',
    url: 'https://www.blackbullion.com/pathways/key-stage-4',
    intro: '',
    duration: '43 min',
    image:
      'https://prodcontent.blackbullion.com/images/pathways/12/thumb',
    type: 'pathway',
    has_summative_assessment: false,
  },
  {
    id: 16,
    title: 'David',
    internal_title: 'test3',
    url: 'https://www.blackbullion.com/pathways/key-stage-4',
    intro: '',
    duration: '19 min',
    image:
      'https://prodcontent.blackbullion.com/images/pathways/12/thumb',
    type: 'pathway',
    has_summative_assessment: false,
  },
  {
    id: 34,
    title: 'Walter',
    internal_title: 'test4',
    url: 'https://www.blackbullion.com/pathways/key-stage-4',
    intro: '',
    duration: '23 min',
    image:
      'https://prodcontent.blackbullion.com/images/pathways/12/thumb',
    type: 'pathway',
    has_summative_assessment: false,
  }
];

describe('<Selection />', () => {
  const component = renderer.create(<CardItems items={mockItems} />);

  it('Should render correctly', () => {
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should have the correct number of card items', () => {
    render(<CardItems items={mockItems} />);

    const items = screen.getAllByTestId('card', {});

    expect(items).toHaveLength(5);
  });

  it('updates search input on change', () => {
    render(<CardItems items={mockItems} />);

    const searchInput = screen.queryByPlaceholderText('Search Library');

    fireEvent.change(searchInput as HTMLInputElement, {target: {value: 'test'}});

    expect((searchInput as HTMLInputElement).value).toBe('test');
  })

  it('updates number of items on change of search input', () => {
    render(<CardItems items={mockItems} />);

    const searchInput = screen.queryByPlaceholderText('Search Library');

    fireEvent.change(searchInput as HTMLInputElement, {target: {value: 'David'}});

    const items = screen.getAllByTestId('card', {});

    expect(items).toHaveLength(1);
  })

  it('updates select option on change', () => {
    render(<CardItems items={mockItems} />);

    const dropdown = screen.getByTestId('select') as HTMLSelectElement;

    expect(dropdown.value).toEqual('DEFAULT');

    fireEvent.change(dropdown, { target: { value: 'duration' } });

    expect(dropdown.value).toEqual('duration');
  })
});
