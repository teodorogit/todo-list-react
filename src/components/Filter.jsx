import React from 'react'

function Filter({filter, setFilter, setSort}) {
  return (
    <div className='filter'>
        <h2>Filtrar:</h2>

        <div className='filter-options'>

            <div className='filter-section'>
                <div>
                    <p>Status</p>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incompleted">Incompletas</option>
                    </select>
                </div>
                <div className='ordem'>
                    <p>Ordem Alfabética:</p>
                    <button onClick={() => setSort("Asc")}>Asc</button>
                    <button onClick={() => setSort("Desc")}>Desc</button>
                 </div>

            </div>
        
        </div>
    </div>
  )
}

export default Filter
