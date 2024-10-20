// General React imports 
import React, { useState, ChangeEvent, FormEvent } from 'react';

//Navbar component 
const Navbar: React.FC = () => {
    const [inp,setInp] = useState<string>('');

    const submitHandle = (e: ChangeEvent<HTMLInputElement>): void => {
        setInp(e.target.value);
    };
    const submitVerify = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        alert(`Submitted: ${inp}`);
        
    }

    return (
        <div className="navbar">
            <h1>Navbar</h1>
            <img src="" alt="Logo" />
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <form onSubmit={submitVerify} >
                <input type="text" name="" id="" value={inp} placeholder='Search'/>
                <button type="submit" onClick={undefined}>Search</button>
            </form >
            <div>
            {/* drop down */}
            <button>Dropdown</button>
            </div>
        </div>
    );
};
export default Navbar;

