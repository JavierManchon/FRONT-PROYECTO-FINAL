import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import iconImage from "../../../images/CodeHUBAzulTransparente.png";
import './_profile.scss';

const Profile = () => {
  const { authState, patchUser } = useAuth();
  //const userInfo = authState.user;

  const [showEditForm, setShowEditForm] = useState(false);

  const [newUsername, setNewUsername] = useState('');
  const [newPicture, setNewPicture] = useState(null);

  const handleChangeUsername = (event) => {
    setNewUsername(event.target.value);
  };

  const handleFileChange = (event) => {
    setNewPicture(event.target.files[0]);
  };

  const handleUserEdit = async (event) => {
    event.preventDefault();
  
    try {
      const userData = {};
  
      if (newUsername) {
        userData.username = newUsername;
      }
  
      if (newPicture) {
        userData.image = newPicture;
      }
  
      await patchUser(authState.user._id, userData);
  
      setNewUsername('');
      setNewPicture(null);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const toggleEditForm = () => {
    setShowEditForm(prevState => !prevState);
  };

  if (!authState.user) {
    return <div>Cargando...</div>;
  }

  return (
    <section className="profile-container">
      <article className="profile-id-container">
        <div className="profile-id-image-container">
          <img className="profile-id-image" alt="" src={authState.user.image}/>
        </div>
        <h3 className="profile-id-username">{authState.user.username}</h3>
        <h4 className="profile-id-name">{authState.user.name}</h4>
        <h4 className="profile-id-surname">{authState.user.surname}</h4>
        <h4 className="profile-id-email">{authState.user.email}</h4>
        <img className="edit-icon" src={iconImage} alt="" onClick={toggleEditForm} />
        {showEditForm && (
          <div className="edit-profile-form">
            <form onSubmit={handleUserEdit}>
              <div className="input-area">
                <label htmlFor="newUsername">Nuevo nombre de usuario:</label>
                <input type="text" id="newUsername" name="newUsername" value={newUsername} onChange={handleChangeUsername} />
              </div>
              <div className="input-area">
                <label htmlFor="newPicture">Nueva imagen de perfil:</label>
                <input type="file" id="newPicture" name="newPicture" onChange={handleFileChange} />
              </div>
              <div className="edit-profile-form-buttons">
                <button type="submit" className="form-button">Guardar cambios</button>
              </div>
            </form>
          </div>
        )}
      </article>
    </section>
  );
};

export default Profile;
