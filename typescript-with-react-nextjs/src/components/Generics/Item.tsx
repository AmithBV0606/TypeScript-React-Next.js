import React from 'react'

type ItemProps<T> = {
    id: number;
    title: string;
    extra: T[];
}

const Item = (props: ItemProps<object>) => {
  return (
    <div>
        <h1>{props.id}</h1>
        <p>{props.title}</p>
    </div>
  )
}

export default Item;