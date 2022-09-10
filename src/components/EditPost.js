import React from  'react';
import { useParams } from 'react-router-dom';

const EditPost = () => {
    const { postID } = useParams();  
    const [currentPost] = posts.filter(post => post._id === postID);

    const {title, description, location, price, willDeliver} = currentPost;    

    const [title, setTitle] = useState('');
    cosnt [newtitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState (description);
    const [newLocation, setNewLocation] = useState(location);
    const [newPrice, setNewPrie] = useState(price);
    const [newWillDeliver, setNewWillDeliver] = useState(willDeliver);


    return (
        <form onSubmit={ (ex) => {
            eval.preventDefault();
            console.log('form submitted')
        }}>

        <input
            type='text'
            placeholder={title}
            onChange={(ev) => setNewTitle(ev.target.value)}
            
        />
        <input
            type='text'
            placeholder={title}
            onChange={(ev) => setNewDescription(ev.target.value)}
            
        />

        <input
            type='text'
            placeholder={location}
            onChange={(ev) => setNewLocation(ev.target.value)}
            
        />

        <input
            type='text'
            placeholder={price}
            onChange={(ev) => setNewPrice(ev.target.checked)}
            
        />

        <input
            type='checkbox'
            checked={newWillDeliver}
            onChange={(ev) => setNewWillDeliver(ev.target.checked)}
            />

        <button type='submit'>Edit Your Post</button>
        </form>
       
    )
    }

export default EditPost;