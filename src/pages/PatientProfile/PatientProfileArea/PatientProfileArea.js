import React, { useState } from 'react';


const PatientProfileArea = () => {
  const [username, setUsername] = useState('');
  const [first_name, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [newProfileImage, setNewProfileImage] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleProfileImageChange = (e) => {
    setNewProfileImage(URL.createObjectURL(e.target.files[0]));
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your submit logic here (e.g., API call to update user data)
    if (newProfileImage) {
      setProfileImage(newProfileImage);
    }
    if (newPassword) {
      setPassword(newPassword);
    }
    setNewProfileImage('');
    setNewPassword('');
  };

  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Patient Profile</h2>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            marginRight: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img
            src={newProfileImage || profileImage || '../profile.jpg'}
            alt="profile"
            style={{ 
              width: '200px',
              height: '100px',
              objectFit: 'cover',
              marginBottom: '10px',
              // borderRadius: '5px  ndhgf',
              borderRadius: '60%',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            }}
          />
          {/* <input
            type="file"
            accept="image/*"
            onChange={handleProfileImageChange}
            style={{ marginTop: '10px' }}
          /> */}
        </div>

        <div
          style={{
            width: '400px',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            paddingLeft: '20px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            backgroundColor: '#f5f5f5',
            paddingBottom:'20px',
          }}
        >
          <div style={{ marginBottom: '10px' }}>
            <label style={{ marginRight: '5px' }}>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                padding: '5px',
                border: '1px solid #ccc',
                borderRadius: '3px',
              }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ marginRight: '5px' }}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                padding: '5px',
                border: '1px solid #ccc',
                borderRadius: '3px',
              }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ marginRight: '5px' }}>First Name:</label>
            <input
              type="text"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
              style={{
                padding: '5px',
                border: '1px solid #ccc',
                borderRadius: '3px',
              }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ marginRight: '35px' }}>Email :</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: '5px',
                border: '1px solid #ccc',
                borderRadius: '3px',
              }}
            />
          </div>
         
          <div style={{ marginBottom: '10px' }}>
            <label style={{ marginRight: '40px' }}>Age :</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              style={{
                padding: '5px',
                border: '1px solid #ccc',
                borderRadius: '3px',
              }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ marginRight: '20px' }}>Gender :</label>
            <input
              type="text"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              style={{
                padding: '5px',
                border: '1px solid #ccc',
                borderRadius: '3px',
              }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ marginRight: '20px' }}>Address :   </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={{
                padding: '5px',
                border: '1px solid #ccc',
                borderRadius: '3px',
              }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ marginRight: '5px' }}>New Password:</label>
            <input
              type="password"
              value={newPassword}
              onChange={handlePasswordChange}
              style={{
                padding: '5px',
                border: '1px solid #ccc',
                borderRadius: '3px',
              }}
            />
          </div>
         
          
          <div style={{ marginBottom: '10px' }}>
            <label>Change Profile:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleProfileImageChange}
              style={{ marginTop: '5px' }}
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '10px 15px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default PatientProfileArea;
