import './search-box.styles.css';
const SearchBox = (props) => {
    const { placeholder, className, onChangeHandler } = props;
    return (
        <div className="search">
            <input
                type="search"
                placeholder={placeholder}
                className={`search-box ${className}`}
                spellCheck={false}
                onChange={onChangeHandler}
            />
        </div>

    );
}
export default SearchBox;

