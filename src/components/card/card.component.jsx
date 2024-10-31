import './card.styles.css';

const Card = (props) => {
    const {id,name,email} = props;
    return (
        <div key={id} className='card-container'>
            <img
                src={`https://robohash.org/${id+15}?set=set2&size=180x180`}
                alt={`moster ${name}`}

            />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card; 
