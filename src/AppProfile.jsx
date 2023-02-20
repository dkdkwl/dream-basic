import './App.css';
import Profile from './components/Profile';

function AppProfile() {
  return (
    <>
      <button onClick={(event) => {
        console.log(event);
        alert("버튼이 클릭이 됨")
      }}>버튼</button>
      <Profile newState={false} name='James Kim0' title='프론트엔드 개발자0' image='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'></Profile>
      <Profile newState={true} name='James Kim1' title='프론트엔드 개발자1' image='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'></Profile>
      <Profile newState={true} name='James Kim2' title='프론트엔드 개발자2' image='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'></Profile>
    </>
  );
}

export default AppProfile;
