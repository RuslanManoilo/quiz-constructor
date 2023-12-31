import { FilterInput, FilterSelect, ResetBtn, Wrapper } from "./SearchBar.styled";

const SearchBar = ({
    filters: { topic, level },
    onChangeFilter,
    onResetFilters
}) => {
    return (
        <Wrapper>
            <FilterInput
                onChange={evt => onChangeFilter('topic', evt.target.value)}
                value={topic}
                type="text"
                placeholder="Filter by topic..."
            />
            <FilterSelect
                onChange={evt => onChangeFilter('level', evt.target.value)}
                value={level}
            >
                <option value="all">All</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
            </FilterSelect>
            <ResetBtn onClick={onResetFilters}>Reset Filters</ResetBtn>
        </Wrapper>
    )
};


export default SearchBar;