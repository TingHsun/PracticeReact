import { useState } from 'react';
import Item from './Item'

const ToDoList = () => {

    const str = '';
    const [text, setText] = useState(str);

    const [items, setItems] = useState([ {id: 1, memo: '竹竹喝奶'}, {id: 2, memo: '竹竹睡覺'} ]);

    const addMemo = () => {
        const newItems = [...items,{id: Date.now(), memo: text}];
        setItems(newItems);
    }

    const removeMemo = (id) => {
        console.log('remove id: ' + id);
        const newItems = items.filter(x => x.id != id);
        setItems(newItems);
    }

    return (
        <div>
            <ol>
                {items.map(item => {
                    return <Item key={item.id} id={item.id} memo={item.memo} removeMemo={removeMemo}></Item>;
                })}
            </ol>
            <input type="text" onChange={(event) => setText(event.target.value)}/>
            <button type='button' onClick={addMemo}>add</button>
        </div>
    )
}

export default ToDoList;