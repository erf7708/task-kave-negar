import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreatePost from "./CreatePost";
import { usePosts } from "@/context/postContext";
import { createPost } from "@/services/postServices";
import { useSnackbar } from "notistack";

jest.mock("next/router", () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

jest.mock("@/context/postContext", () => ({
  usePosts: jest.fn(),
}));
jest.mock("@/services/postServices", () => ({
  createPost: jest.fn(),
}));
jest.mock("notistack", () => ({
  useSnackbar: jest.fn(),
}));

describe("CreatePost Component", () => {
  beforeEach(() => {
    useSnackbar.mockImplementation(() => ({ enqueueSnackbar: jest.fn() }));
    usePosts.mockImplementation(() => ({ addPost: jest.fn() }));
  });

  it("successfully creates a post and navigates", async () => {
    createPost.mockResolvedValue({
      id: 123,
      title: "Test Title",
      body: "Test Body",
    });
    const { getByLabelText, getByText, getByRole } = render(<CreatePost />);

    await userEvent.type(getByLabelText(/title/i), "Test Title");
    await userEvent.type(getByLabelText(/body/i), "Test Body");
    userEvent.click(getByText(/submit/i));

    await waitFor(() => {
      expect(createPost).toHaveBeenCalledWith({
        title: "Test Title",
        body: "Test Body",
      });
      expect(screen.getByText("Post successfully created")).toBeInTheDocument();
    });
  });

  it("displays an error when post creation fails", async () => {
    createPost.mockRejectedValue(new Error("Creation failed"));
    const { getByLabelText, getByText, getByRole } = render(<CreatePost />);

    await userEvent.type(getByLabelText(/title/i), "Test Title");
    await userEvent.type(getByLabelText(/body/i), "Test Body");
    userEvent.click(getByText(/submit/i));

    await waitFor(() => {
      expect(createPost).toHaveBeenCalled();
      expect(screen.getByText("An error has occurred")).toBeInTheDocument();
    });
  });
});


