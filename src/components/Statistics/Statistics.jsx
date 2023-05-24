import PropTypes from 'prop-types';
import style from './Statistics.module.css'
import  getRandomHexColor from '../../utils/getRandomColor'


function Statistics({title, statistic}) {
    return (
        <section className={style.sectionStats}>
            {title && <h2 className={style.title}>{title}</h2>}
            <ul className={style.listStats}>
                {statistic.map(({id, label, percentage}) => {
                    const itemColor = {backgroundColor: getRandomHexColor()}
                    return( <li className={style.listStatsItem} key = {id} style={itemColor}>
                        <span className={style.label}>{label}</span>
                        <span className={style.percentage}>{percentage + '%'}</span>
                    </li>)
                })}
            </ul>
        </section>
    )
}


Statistics.propTypes = {
    title: PropTypes.string,
    statistic: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          percentage: PropTypes.number.isRequired
        })
    ).isRequired
}

export default Statistics