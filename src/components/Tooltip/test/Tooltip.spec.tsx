import { render, fireEvent } from "@testing-library/react";

import Tooltip from "../Tooltip";

describe("Tooltip", () => {
    test('renders component without crash', async () => {
        const tooltipText = 'Lorem Ipsum dolor sit amet';
        const { container } = render(<Tooltip tooltipText={tooltipText} />);
        expect(container.querySelector('i')).toBeInTheDocument();
      });

    test('Tooltip shows the correct text when the mouse enters', async () => {
        const tooltipText = 'Lorem Ipsum dolor sit amet';
        const { container, queryByText } = render(<Tooltip tooltipText={tooltipText} />);
        const tooltipSelector = container.querySelector('i')
        expect(queryByText(tooltipText)).toBeNull();
        fireEvent.mouseEnter(tooltipSelector!);
        expect(queryByText(tooltipText)).toBeInTheDocument();
      });
      
      test('Tooltip disappears when the mouse exits', async () => {
        const tooltipText = 'Lorem Ipsum dolor sit amet';
        const { container, queryByText } = render(<Tooltip tooltipText={tooltipText} />);
        const tooltipSelector = container.querySelector('i')
        fireEvent.mouseEnter(tooltipSelector!);
        fireEvent.mouseLeave(tooltipSelector!);
        expect(queryByText(tooltipText)).toBeNull();
      });
});