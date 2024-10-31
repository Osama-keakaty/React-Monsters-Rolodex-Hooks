import Card from '../card/card.component.jsx'
import './card-list.styles.css';

const CardList = (props) => {
    const users = (user) => {
        return (
            <Card

                name={user.name}
                email={user.email}
                id={user.id} 
                key={user.id} 
                
                />
        )
    }
    return (
        <div className="card-list">
            {props.filteredMonsters.map(users)}
        </div>
    );
}

export default CardList;