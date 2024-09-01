import image from "../../assets/github.png";
import './Dsa.css';
export default function Web() {
  return (
    <main>
    <div className="card">
        {/* <img src={image} alt="image" /> */}
        <img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt="" />
      <div className="card-content">
        <h2>Web-dev</h2>
        <p>
          I have done 20+ mini-projects using react-js and Firebase.
        </p>
        <a href="#" className="button">
          Find out more
          <span class="material-symbols-outlined">arrow_right_alt</span>
        </a>
      </div>
    </div>
    </main>
  );
}


