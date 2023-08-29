import { render, screen } from "@testing-library/react";
import Basic from "../Basic";

test("Example 1 renders successfully",()=>{
    render(<Basic/>);
    const element =screen.getByText(/first test/i);
    expect(element).toBeInTheDocument();
})