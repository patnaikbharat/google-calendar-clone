import React from 'react'
import Day from './Day'

export default function Month({month}) {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((week, id1) => (
        <React.Fragment key={id1}>
            {week.map((day, id2) => (
                <Day day={day} key={id2} />
            ))}
        </React.Fragment>
      ))}
    </div>
  )
}
