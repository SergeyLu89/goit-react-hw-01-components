export const Statistics = ({stats, title})=>{
    return(<section className="statistics">
    {title? <h2>{title}</h2>: null}
  
    <ul className="stat-list">
        {stats.map(item =>{return(
            <li className="item" key = {item.id}>
            <span className="label">{item.label}-</span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        )})}
      
    </ul>
  </section>)
}