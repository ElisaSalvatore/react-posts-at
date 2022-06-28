import React, {useState} from 'react';
import './FbPost.css'

function Post (props) {
    //console.log(props);
    const [like, setLike] = useState(0);
    const increment = () => {
        setLike(like + 1);
    }
    const { author, description } = props;

    return (
        <div className='Post'>
            <h2>{author}</h2>    
            <h4> {description}</h4>
            <button onClick={increment}>LIKE:{like}</button>
        </div>
    )
}

export default Post;