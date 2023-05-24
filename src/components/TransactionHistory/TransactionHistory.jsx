import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css'

function TransactionHistory({items}){
    return (
        <table className={style.table}>
            <thead className={style.thead}>
                <tr className={style.theadRow}>
                    <th className={style.theadCol}>type</th>
                    <th className={style.theadCol}>amount</th>
                    <th className={style.theadCol}>currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({id, type, amount, currency}) => (
                    <tr key={id} className={style.row}>
                        <td className={style.col}>{type}</td>
                        <td className={style.col}>{amount}</td>
                        <td className={style.col}>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        })
    ).isRequired
}

export default TransactionHistory