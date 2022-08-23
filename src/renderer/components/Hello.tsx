import { Link } from "react-router-dom";

export default function Hello () {
    return (
      <div>
        <div className="Hello">
  
        </div>
        <h1>My Photo Cropper</h1>
        <div className="Hello">
          <Link to="/photo"/>
            <button type="button">
              <span role="img" aria-label="camera">
                📸
              </span>
                Crop photo
            </button>
          
         
        </div>
      </div>
    );
  };
  