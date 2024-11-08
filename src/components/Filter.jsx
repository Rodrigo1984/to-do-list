// eslint-disable-next-line react/prop-types
const Filter = ({filter, setFilter, setSort}) => {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <p>Status:</p>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incompleted">Imcompletas</option>
        </select>
      </div>
      <div>
        <p>Ordem alfabética:</p>
        <button onClick={() => setSort("Asc")}>Asc</button>
        <button onClick={() => setSort("Desc")}>Desc</button>
      </div>
    </div>
  )
}

export default Filter
