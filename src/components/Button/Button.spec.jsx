import { render, screen } from "@testing-library/react";
import { Button } from ".";
import userEvent from "@testing-library/user-event";
describe('<Button />', () => {
    it('should render a <Button /> with text "Label"', () => {
        render(<Button text={"Label"}/>)

        const sut = screen.getByRole('button', { name: /label/i });

        expect(sut).toBeInTheDocument();
    });

    it('should render a <Button /> with text "Label" and call function on it\'s click', () => {
        const fn = jest.fn();

        render(<Button text={"Label"} method={fn} />);

        const sut = screen.getByRole('button', { name: /label/i });
        
        expect.assertions(2);

        userEvent.click(sut);

        expect(sut).toBeInTheDocument();

        expect(fn).toHaveBeenCalledTimes(1);
    });
});