// single selection
//multiple selection
import data from "./data.js"
import { useState } from "react"
import "./styles.css"

export default function Accordian() {
  const [selected, setSelected] = useState(null)

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId)
  }

  console.log(selected)

  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              className="item"
              key={dataItem.id}
            >
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data present</div>
        )}
      </div>
    </div>
  )
}
