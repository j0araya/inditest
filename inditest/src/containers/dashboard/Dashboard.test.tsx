import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Dashboard from "./Dashboard"
import textDashboard from "./Dashboard.text";
import { BrowserRouter } from "react-router-dom";
import mockPodcasts from '../../__mocks__/podcasts.mock.json';

const mockedUsedNavigate = mockPodcasts

jest.mock("react-router-dom", () => ({
	...(jest.requireActual("react-router-dom") as any),
	useLoaderData: () => mockedUsedNavigate
}));

describe('Dashboard view', () => {
	it('Firs Load', async () => {
		render(<Dashboard />, { wrapper: BrowserRouter });
		expect(screen.getByPlaceholderText(textDashboard.inputPlaceholder)).toBeDefined();
	})

	it('podcast Load', async () => {
		render(<Dashboard />, { wrapper: BrowserRouter });
		expect(await screen.findByText(mockPodcasts.feed.entry[0]['im:name'].label)).toBeDefined();
		expect(await screen.findByText(mockPodcasts.feed.entry[0]['im:artist'].label)).toBeDefined();
	})

	it('podcast Load', async () => {
		render(<Dashboard />, { wrapper: BrowserRouter });
		expect(await screen.findByText(mockPodcasts.feed.entry[0]['im:artist'].label)).toBeDefined();
	})

	it('change input', async () => {
		render(<Dashboard />, { wrapper: BrowserRouter });
		expect(await screen.findByText(mockPodcasts.feed.entry[0]['im:artist'].label)).toBeDefined();
		const text = mockPodcasts.feed.entry[0]['im:name'].label;
		const id = mockPodcasts.feed.entry[0].id.label;
		const input = screen.getByPlaceholderText(textDashboard.inputPlaceholder);
		await userEvent.type(input, text)
		const podcasts = screen.getByTestId(id);
		expect(podcasts).toBeDefined();
	})
})