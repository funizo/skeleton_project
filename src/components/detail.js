import Toolbar from './toolbar';
import { useParams } from 'react-router-dom';

function Detail(props) {

    const {id} = useParams();
    const bookItem = props.novelData.find(function (x) {
        return x.id === id
    })
    
    return (
        <div>
            <Toolbar />
            <div>
                {/* <img src={bookItem.img} alt={bookItem.title} />
                <h2>{bookItem.title}</h2>
                <p>작가: {bookItem.writer}</p>
                <p>가격: {bookItem.price}</p>                */}
                ddddddddddddddddddddddddddddd
            </div>
        </div>
    );
}

export default Detail;