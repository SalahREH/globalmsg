import React, { useEffect, useState } from 'react'

function UserDropdown ({currentUser, setCurrentUser}) {


    function setGuestUser() {
        const randomUserId = Math.floor(Math.random() * 10000000001);
        const guestUsername = `guest${randomUserId}`;
        localStorage.setItem('currentUser', guestUsername);
    }

    useEffect(() => {
        if (currentUser == '') {            
            setGuestUser();
        } 
    }, [currentUser])

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [newUsername, setNewUsername] = useState('');

    const handleToggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleUsernameChange = () => {
        setCurrentUser(newUsername);
        localStorage.setItem('currentUser', newUsername);
        // setNewUsername('')
        setDropdownOpen(false);
    };

    return (
        <div className="user-dropdown">
            <div className="dropdown-header" onClick={handleToggleDropdown}>
                <span>{currentUser}</span>
                <span>{isDropdownOpen ? '▲' : '▼'}</span>
            </div>
            {isDropdownOpen && (
                <div className="dropdown-content">
                    <input
                        type="text"
                        placeholder="New username"
                        value={newUsername}
                        onChange={(e) => setNewUsername(e.target.value)}
                    />
                    <button onClick={handleUsernameChange}>Change username</button>
                </div>
            )}
        </div>
    );
}

export default UserDropdown 