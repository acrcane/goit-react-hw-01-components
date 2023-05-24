import PropTypes from 'prop-types';
import style from './FriendListItem.module.css'


function Friends({avatar, name, isOnline}){
    return(
        <li className={style.friendsListItem}>
            <span className={isOnline ? style.status + ' ' + style.online: style.status + ' ' + style.offline}>{isOnline}</span>
            <img src={avatar} alt={name} className={style.avatar} />
            <p className={style.name}>{name}</p>
        </li>
    )
}

Friends.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default Friends