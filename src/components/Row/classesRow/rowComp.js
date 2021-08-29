import './rowComp.css'
import Media from 'react-media'

const RowComp = ({ row_type, class_name, time_of_class, join_link, button_status }) => {
  return (
    <div>
      {/* <Media query="(max-width:480px)">
        {matches => {
          if (matches) {
            return (
              <div className="Row__Container_media">

                <div className="Row__Title_m">
                  <p className="text-2xl  text-teal-accent-700 Row__TitleText">{row_type}</p>
                </div>
                <div className="media_">
                  <div className="Row__Lecture_m">
                    <p>{class_name}</p>
                  </div>
                  <div className="Row__LectureTime_m">
                    <p>{time_of_class}</p>
                  </div>
                </div>
                <div className="Row__JoinButtonDiv_m">
                  <a className={(button_status == 0) ? "Row__JoinButton_Off_m" : "Row__JoinButton_m"} href={join_link} target="_blank" rel="noreferrer" title={(button_status == 1) ? "This is a general link for " + class_name + " class. Do not depend completely on this link." : null}>{class_name == "DE" || class_name == "Algo" ? "Check Group" : "Join Now"}</a>
                </div>
              </div>
            );
          }
          else {
            return (
              <div className="Row__Container">
                <div className="Row__Title">
                  <p className="text-2xl  text-teal-accent-700 Row__TitleText">{row_type}</p>
                </div>
                <div className="Row__Lecture">
                  <p className="text-2xl  ">{class_name}</p>
                </div>
                <div className="Row__LectureTime">
                  <p className="text-2xl  ">{time_of_class}</p>
                </div>
                <div className="Row__JoinButtonDiv" >
                  <a className="text-2xl bg-teal-accent-700 "  className={(button_status === 0) ? "Row__JoinButton_Off" : "Row__JoinButton"} href={join_link} target="_blank" rel="noreferrer" title={(button_status === 1) ? "This is a general link for " + class_name + " class. Do not depend completely on this link." : null}>{class_name === "DE" || class_name === "Algo" ? "Check Group" : "Join Now"}</a>
                </div>
              </div>
            );
          }
        }
        }
      </Media> */}
      <div >
      <div className="mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between rounded-3xl shadow-xl my-5">
        <p className="text-center">
            <span className="block text-sm">{row_type}</span>
          <span className="block text-2xl font-medium text-teal-accent-400 mt-2">{class_name}</span>
        </p>
        <p className="text-center m-5 sm:m-0">
            <span className="block text-sm">START TIME</span>
          <span className="block text-2xl text-teal-accent-400 mt-2">{time_of_class}</span>
        </p>
        
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 items-center justify-center">
        
          <div className="inline-flex rounded-3xl shadow ">
            <a
              href={join_link}
                className={"cursor-pointer text-xl text-white sm:text-xl inline-flex items-center justify-center px-5 py-3 border border-transparent text-base rounded-3xl text-white" + ((button_status === 0) ? " bg-gray-400 hover:bg-gray-500" : " bg-teal-accent-700 hover:bg-teal-500")}
              target="_blank"
              rel="noreferrer"
            >
              {class_name=="DE" || class_name=="Algo" || class_name=="OC"  ? "Check Group" : "Join Now"}
            </a>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  )

}


export default RowComp;