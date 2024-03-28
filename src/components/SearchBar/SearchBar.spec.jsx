import { render } from "@testing-library/react";
import { SearchBar } from ".";

describe('<SearchBar />', () => {
    it('should call handleChange function on each key pressed', () => {
        const fn = jest.fn();
        const {debug} = render(<SearchBar method={fn} searchValue={'testando'} />);
        debug();
    });
});