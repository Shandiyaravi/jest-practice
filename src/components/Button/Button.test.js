import React from "react";
import Button from "./Button";
import { fireEvent, render, screen } from "@testing-library/react";

test("Button changes color to red when clicked", () => {
    // render the Button component
    render (<Button />);
    
    // find the button element and click it
    fireEvent.click(screen.getByTestId("button"));
    
    // expect the button to have red background color
    expect(screen.getByTestId("button")).toHaveStyle({ backgroundColor: "red" });
});
