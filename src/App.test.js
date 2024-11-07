import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// Mock the components to focus on their existence within App
jest.mock("./components/Nav", () => () => <div>Nav Component</div>);
jest.mock("./components/Main", () => () => <div>Main Component</div>);
jest.mock("./components/Menu", () => () => <div>Menu Component</div>);
jest.mock("./components/Testimonials", () => () => <div>Testimonials Component</div>);
jest.mock("./components/OurStory", () => () => <div>Our Story Component</div>);
jest.mock("./components/Footer", () => () => <div>Footer Component</div>);

describe("App Component", () => {
  test("renders all components correctly", () => {
    render(<App />);

    // Check if each component is rendered within the App component
    expect(screen.getByText("Nav Component")).toBeInTheDocument();
    expect(screen.getByText("Main Component")).toBeInTheDocument();
    expect(screen.getByText("Menu Component")).toBeInTheDocument();
    expect(screen.getByText("Our Story Component")).toBeInTheDocument();
    expect(screen.getByText("Testimonials Component")).toBeInTheDocument();
    expect(screen.getByText("Footer Component")).toBeInTheDocument();
  });
});
