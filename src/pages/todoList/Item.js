const Item = (prop) => {

    const handleRemove = () => {
        prop.removeMemo(prop.id)
    }

    return (
        <li>{ prop.memo }<button type="button" onClick={handleRemove}>刪除</button></li>
    )
}

export default Item;