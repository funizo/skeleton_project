import novel from '../data/novel'
import { useState, useEffect } from 'react';
import "react-loading-skeleton/dist/skeleton.css"
import Skeleton from 'react-loading-skeleton';
import { Route, Routes,Link ,useNavigate,Outlet } from 'react-router-dom'



function NovelContent() {
    const navigate = useNavigate();
    const [novelData, setNovelData] = useState(novel);
    const [loading, setLoading] = useState(true);
    const handle = () => {
        navigate("detail")
        console.log(novelData)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);


    return(
        
        <div>
            {loading ? (
        novelData.map((_, i) => (
          <div className="image-container" key={i}>
            <TabContentSkeleton />
          </div>
        ))
      ) : (
        novelData.map((a, i) => (
            <div className="image-container" key={i} onClick={handle}>
              <TabContent key={i} novelData={novelData[i]} i={i} />
            </div>
          ))
          )}


          
        </div>
    )
}

function TabContentSkeleton() {
    return (
        <div className="skeleton-container">
            <h3 className="skeleton-title"><Skeleton duration={1} width={300} height={100} /></h3>
            <h3 className="skeleton-title"><Skeleton duration={1} width={300} height={20} /></h3>
            <p className="skeleton-text"><Skeleton  duration={1} width={80} height={15} /></p>
            <p className="skeleton-text-small"><Skeleton  duration={1} width={60} height={15} /></p>
        </div>
    )
}

function TabContent(props,i) {
    
        return (
            <div className='novel'>
                <img src={props.novelData.img} alt=""/>
                <h3 className='card-title'>{props.novelData.title}</h3>
                <p>{props.novelData.writer}</p>
                <p>{props.novelData.price}</p>
            </div>
        )
    
}

export default NovelContent