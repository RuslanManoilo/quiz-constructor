const SearchBar = ({ 
    filters: { topic, level },
    onChangeFilter
}) => {
    return (
        <div>
            <input 
                onChange={evt => onChangeFilter('topic', evt.target.value)}
                value={topic} 
                type="text" 
                placeholder="Filter by topic..."
            />
            <select
                onChange={evt => onChangeFilter('level', evt.target.value)}
                value={level}
            >
                <option value="all">All</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
            </select>
        </div>
    )
}


export default SearchBar;