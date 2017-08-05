import React from 'react';
import Modal from 'react-modal'
import './App.css';

import Club from '../Club'
import ClubRow from '../ClubRow'

const App = ({
  clubs,
  showClub,
  club,
  orderByName,
  orderByStanding,
  selectClub,
  showClubsList
}) => (
  <div className="wrapper">
    <div className="toolbar">
      <button onClick={orderByName} className="button-sort">
        Sort By Name
      </button>
      <button onClick={orderByStanding} className="button-sort">
        Sort By Standing
      </button>
    </div>
    <ul>
    {clubs.map(c =>
      <ClubRow
        key={c.standing}
        club={c}
        onClick={() => selectClub(c)}/>
      )
    }
    </ul>
    <Modal isOpen={showClub}
      overlayClassName="modal-overlay"
      className="modal"
      contentLabel="club">
      <Club club={club} closeModal={showClubsList} />
    </Modal>
  </div>
)


export default App;
