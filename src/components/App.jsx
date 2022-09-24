import {Contacts} from "./Contacts/Contacts";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        marginTop: '100px',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Contacts />
    </div>
  );
};
