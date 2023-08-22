function Tag({ tag }) {
    return tag.map((name, index) => (
        <span className="tag-wrapper__contenant" key={index}>
            {name}
        </span>
    ))
}

export default Tag
