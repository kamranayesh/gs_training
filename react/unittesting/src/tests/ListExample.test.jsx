import {render,screen} from "@testing-library/react";
import ListExample from "../ListExample";
const mockData = [
    {
        id: 1,
        first_name: "Sumit",
        last_name: "Kohli",
        email: "kohli.iitm@gmail.com",
        age: 34,
    },
    {
        id: 2,
        first_name: "James",
        last_name: "B",
        email: "James@gmail.com",
        age: 35,
    },
];

test("list rendered successfully",()=>{
    render(<ListExample data={mockData}/>);
    expect(screen.getByText(/asdf/i)).toBeInTheDocument();

});
