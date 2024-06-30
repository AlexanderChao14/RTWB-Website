import React from 'react'

const TableCell = ({text , listItems}) => {

  const list = listItems;
  const listResult = list.map((listItem) => 
    <li>{listItem}</li>
  );

  return (
    <React.Fragment>
        <div className="flex h-full w-full bg-blue-300 p-5 justify-center items-center font-semibold">{text}</div>
        <div className="h-full w-full bg-blue-300 p-5">
            <ul className="list-disc px-5">
                {listResult}
            </ul>
        </div>
    </React.Fragment>
  )
}

export default TableCell
