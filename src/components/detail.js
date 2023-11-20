import Toolbar from './toolbar';
import { useLocation } from 'react-router-dom';

function Detail() {
    const location = useLocation();
    const bookData = location.state?.bookData || {};
    console.log('bookData',bookData)

    return (
        <div>
            <Toolbar />
            <div>
                <img src={bookData.img} alt={bookData.title} />
                <h2>{bookData.title}</h2>
                <p>작가: {bookData.writer}</p>
                <p>가격: {bookData.price}</p>               
            </div>
        </div>
    );
}

export default Detail;