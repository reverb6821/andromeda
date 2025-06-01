import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loader from "@/registry/ui/warp-loader";
import { describe, it, expect } from 'vitest'

describe("Loader Component", () => {
    it('renders the loader correctly', () => {
        render(<Loader />);
        const loaderElement = screen.getByRole("loader");
        expect(loaderElement).toBeInTheDocument();
    })
});
