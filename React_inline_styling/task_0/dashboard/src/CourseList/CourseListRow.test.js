import React from "react";
import CourseListRow from "./CourseListRow";
import { render, screen } from "@testing-library/react";

describe("CourseListRow component", () => {
  it("should render both headers when isHeader is true and both cells are provided", () => {
    render(<CourseListRow isHeader={true} textFirstCell="First" textSecondCell="Second" />);
    
    expect(screen.getByText("First")).toBeInTheDocument();
    expect(screen.getByText("Second")).toBeInTheDocument();
  });

  it("should render only the first cell with colspan=2 when isHeader is true and the second cell is null", () => {
    render(<CourseListRow isHeader={true} textFirstCell="First" textSecondCell={null} />);
    
    const firstCell = screen.getByText("First");
    expect(firstCell).toBeInTheDocument();
    expect(firstCell).toHaveAttribute("colSpan", "2");
  });

  it("should render both cells when isHeader is false", () => {
    render(<CourseListRow isHeader={false} textFirstCell="First" textSecondCell="Second" />);
    
    expect(screen.getByText("First")).toBeInTheDocument();
    expect(screen.getByText("Second")).toBeInTheDocument();
  });
});
