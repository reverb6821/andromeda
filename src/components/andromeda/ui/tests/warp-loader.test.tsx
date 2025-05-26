import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loader from "@/components/andromeda/ui/warp-loader";
import { describe, it, expect } from 'vitest'

describe("Loader Component", () => {
    it('renders the loader correctly', () => {
        render(<Loader />);
        const loaderElement = screen.getByTestId("loader");
        expect(loaderElement).toBeInTheDocument();
        expect(loaderElement).toHaveClass("animate-spin");
    })
});
