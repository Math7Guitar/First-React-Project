import { render, screen } from "@testing-library/react";
import { Posts } from '.';

const props = {
    posts: [
        {
            id: 1,
            title: 'title 1',
            body: 'body 1',
            photo: 'img/img1.png'
        },
        {
            id: 2,
            title: 'title 2',
            body: 'body 2',
            photo: 'img/img2.png'
        },
        {
            id: 3,
            title: 'title 3',
            body: 'body 3',
            photo: 'img/img3.png'
        },
    ]
};

describe('<Posts />', () => {
    it('should render posts', () => {
        render(<Posts {...props} />);

        expect.assertions(3);

        expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(3);

        expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(3);

        expect(screen.getAllByText(/body/i)).toHaveLength(3);
    });

    it('should render post 3', () => {
        render(<Posts { ...props }/>);

        expect(screen.getByRole('img', { name: /title 3/i })).toHaveAttribute('src', 'img/img3.png');
    });

    it('should match snapshot', () => {
        const { container } = render(<Posts { ...props } />);

        expect(container.appendChild).toMatchSnapshot();
    });
});