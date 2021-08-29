import './title.css'

const Title = () => {
  return (
    <div className="Title__Container">
      <div className="Title__Title">
        <p>Title</p>
      </div>
      <div className="Title__Lecture">
        <p>Class</p>
      </div>
      <div className="Title__LectureTime">
        <p>Start Time</p>
      </div>
      <div className="Title__JoinButtonDiv">
        <p>Join Class</p>
      </div>
    </div>
  );
}

export default Title;