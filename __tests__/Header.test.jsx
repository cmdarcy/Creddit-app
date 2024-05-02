import Header from "../src/components/Header/Header.jsx";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
	beforeEach(() => {
		render(<Header />);
	});
	test("renders when page loads", () => {
		const header = screen.getByTestId("header");
		expect(header).toBeInTheDocument();
	});
});
