import { useNavigate, useRouteLoaderData } from 'react-router-dom';
import { Feed } from '../../types/entry';
import Podcast from '../../components/podcast/Podcast';
import { Badge, EntriesContainer, InputContainer } from './Dashboard.styles';
import React, { useEffect, useState } from 'react';
import { filterPodcast } from '../../utils/utils';
import texts from './Dashboard.text';

type Props = {
	onSelect: (data: Feed) => void;
	setIsLoading: (data: boolean) => void
}

const Dashboard: React.FC<Props> = ({ onSelect, setIsLoading }) => {
	const { feed } = useRouteLoaderData('root') as { feed: Feed[] };
	const navigate = useNavigate();
	const [entries, setEntries] = useState<Feed[]>([]);
	const onChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
		const filtered = feed.filter(f => filterPodcast(value, f))
		setEntries(filtered);
	};

	useEffect(() => {
		if (!feed) return;
		setEntries(feed);
	}, [feed]);

	const onClick = (feed: Feed) => () => {
		onSelect(feed);
		localStorage.setItem('podcast', JSON.stringify(feed));
		setIsLoading(true);
		navigate(`/podcast/${feed.id}`)
	}

	return (
		<>
			<InputContainer>
				<Badge>{feed.length}</Badge>
				<input type="text" onChange={onChange} placeholder={texts.inputPlaceholder}></input>
			</InputContainer>
			<EntriesContainer>
				{entries.map((e) => <Podcast onClick={onClick(e)} key={e.id} entry={e} />)}
			</EntriesContainer>
		</>
	)
}

export default Dashboard;