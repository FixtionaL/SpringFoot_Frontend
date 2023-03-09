import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css";

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
  }, []);
  axios.get('http://localhost:8080/api/players')
    .then(res => {
      setPlayers(res.data);
    })
    .catch(err => {
      console.log(err);
    });

  const deletePlayer = async(id) => {
  await  axios.delete('http://localhost:8080/api/players/'+id)
      .then(res => {
        // setPlayers(players.filter(player => player.id !== id));
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  }
   const [newPlayer, setNewPlayer] = useState({
      name: '',
      position: '',
      age: '',
      prev_club: '',
    });
  
    useEffect(() => {
      axios.get('http://localhost:8080/api/players').then((response) => {
        setPlayers(response.data);
      });
    }, []);
  
    const handleChange = (event) => {
      setNewPlayer({ ...newPlayer, [event.target.name]: event.target.value });
    };
  
    const addPlayer = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.post('http://localhost:8080/api/players', newPlayer);
        setPlayers([...players, response.data]);
        setNewPlayer({ name: '', position: '', age: '', prev_club: '' });
      } catch (error) {
        console.error(error);
      }
    };

    const [playerData, setPlayerData] = useState({
      id : '',
      age: '',
      prev_club: '',
      name: '',
      position: ''
  });

  const handleInputChange = (event) => {
    setPlayerData({
        ...playerData,
        [event.target.name]: event.target.value
    });
};

const handleFormSubmit = async(id) => {
  id.preventDefault();
  axios.put('http://localhost:8080/api/players', +id)
      .then((response) => {
          console.log(response.data);
      })
      .catch((error) => {
          console.log(error);
      });
};

  return (
    <div>
      <div className='Home'>
      <h1 className='head'>Welcome to SpringFoot!!</h1>
      <p>Check out the latest transfers and player information</p>
      </div>
      <div className='Players'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Position</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {players.map(player => (
              <tr key={player.id}>
                <td>{player.id}</td>
                <td>{player.name}</td>
                <td>{player.age}</td>
                <td>{player.position}</td>
                <td>
                  <button onClick={() => deletePlayer(player.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br></br>
      <div className="players">
      {/* {players.map((player) => (
        <div key={player.id}>
          <p>{player.name}</p>
          <p>{player.position}</p>
          <p>{player.age}</p>
          <p>{player.prev_club}</p>
        </div>
      ))} */}
      <h2 className='head'> Add a New Player</h2>
      <form onSubmit={addPlayer} className="add-player-form">
        <label htmlFor="name">Name ↴ </label>
        <input
          type="text"
          id="name"
          name="name"
          value={newPlayer.name}
          onChange={handleChange}
        />
        <label htmlFor="position">Position ↴ </label>
        <input
          type="text"
          id="position"
          name="position"
          value={newPlayer.position}
          onChange={handleChange}
        />
        <label htmlFor="age">Age ↴ </label>
        <input
          type="text"
          id="age"
          name="age"
          value={newPlayer.age}
          onChange={handleChange}
        />
        <label htmlFor="prev_club">Previous Club ↴ </label>
        <input
          type="text"
          id="prev_club"
          name="prev_club"
          value={newPlayer.prev_club}
          onChange={handleChange}
        />
        <button type="submit">Add Player</button>
      </form>
      </div>
      <div className="players">
      {/* {players.map((player) => (
        <div key={player.id}>
          <p>{player.name}</p>
          <p>{player.position}</p>
          <p>{player.age}</p>
          <p>{player.prev_club}</p>
        </div>
      ))} */}
      <h2 className='head'> Update a Player</h2>
      <form onSubmit={handleFormSubmit} className="update">
      <label>Id ↴ </label>
        <input
          type="text"
          // id="name"
          name="id"
          value={newPlayer.id}
          onChange={handleInputChange}
        />
        <label>Name ↴ </label>
        <input
          type="text"
          // id="name"
          name="name"
          value={playerData.name}
          onChange={handleInputChange}
        />
        <label>Position ↴ </label>
        <input
          type="text"
          // id="position"
          name="position"
          value={playerData.position}
          onChange={handleInputChange}
        />
        <label>Age ↴ </label>
        <input
          type="text"
          // id="age"
          name="age"
          value={playerData.age}
          onChange={handleInputChange}
        />
        <label>Previous Club ↴ </label>
        <input
          type="text"
          // id="prev_club"
          name="prev_club"
          value={playerData.prev_club}
          onChange={handleInputChange}
        />
        <button type="submit">Update</button>
      </form>
      </div>
    </div>
  );
}

export default Players;
