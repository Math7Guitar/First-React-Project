/* eslint-disable react/jsx-no-undef */
import { render, screen } from "@testing-library/react";
import { mock } from "./mock";
import { PostCard } from ".";

describe('<PostCard />', () => {
    it('should render PostCard correctly', () => {
        render(<PostCard props={ mock }/>);

        expect.assertions(5);

        expect(screen.getByRole('img', { name: /title 1/i })).toBeInTheDocument();

        expect(screen.getByRole('img', { name: /title 1/i })).toHaveAttribute('src', mock.cover);

        expect(screen.getByText('body 1')).toBeInTheDocument();

        expect(screen.getByAltText(/title 1/i)).toHaveAttribute();

        expect(screen.getByRole('heading', { name: 'title 1' })).toBeInTheDocument();
    });

    it('should match snapshot', () => {
        const { container } = render(<PostCard props={ mock }/>);

        expect(container.appendChild).toMatchSnapshot();
    });
});