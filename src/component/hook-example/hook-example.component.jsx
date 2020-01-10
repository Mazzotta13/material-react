import React, {useState, useEffect} from 'react';

const HookExample = () => {
    const [user, setUser] = useState('test');
    //const [email, setEmail] = useState('test');

    useEffect(() => {
        alert('useEffect activated');
    }, [user]); // useEffect activated when 
    
    return (
    <div>
        <p>{user}</p>
        <button onClick = {() => setUser('Alessio')}>change name</button>
    </div>
    )
}

export default HookExample;