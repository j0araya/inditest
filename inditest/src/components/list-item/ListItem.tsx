import { Chapter } from "../../types/entry";
import { formatDate, formatDuration } from "../../utils/utils";
import { Item, ItemContainer } from "./ListItem.styles";

type Props = {
	chapter: Chapter
	background: number;
}

const ListItem: React.FC<Props> = ({ chapter, background }) => {
	const needBackground = Boolean(background % 2);
	return (
		<ItemContainer>
			<Item flex={8} justify="flex-start" needBackground={needBackground}>{chapter.trackName}</Item>
			<Item flex={2} justify="flex-start" needBackground={needBackground}>{formatDate(chapter.releaseDate)}</Item>
			<Item flex={2} justify="flex-end" needBackground={needBackground}>{formatDuration(chapter.trackTimeMillis)}</Item>
		</ItemContainer>
	)
}

export default ListItem;