import React from 'react';
import {FaBell, FaCalendar, FaChevronLeft, FaChevronRight, FaClock, FaFootballBall, FaPinterest} from "react-icons/all";
import {IconContext} from "react-icons";
import {ProfileCard} from "./ProfileCard";
import {DateCard, DateCardProps} from "./DateCard";
import {WebinarsIconCard} from "./WebinarsIconCard";


function WebinarsFullCard({title = "", subTitle = "", time = "", bgColor = "", icon = <FaBell/>}): JSX.Element {
    return <div className="Webinars-Container">
        <div>
            <WebinarsIconCard backgroundColor={bgColor} icon={icon}/>
            <div className="container">
                <h5>{title}</h5>
                <p>{subTitle}</p>
            </div>
        </div>

        <FaClock/><span>{time}</span>

    </div>
}

export function RightPage(): JSX.Element {
    return <div className="Right-Page">
        <div className="Right-Page-Top-Icons">
            <IconContext.Provider value={{color: "#1e1d2f", className: "Right-Page-Title-Icon"}}>
                <div>
                    <FaBell/>
                </div>
            </IconContext.Provider>

            <IconContext.Provider value={{color: "#1e1d2f", className: "Right-Page-Title-Icon"}}>
                <div>
                    <FaCalendar/>
                </div>
            </IconContext.Provider>

            <div className="Right-Page-Top-Profiles">
                {
                    profileUrls.map(p => <ProfileCard className="Top-Profile" imageUrl={p}
                                                      imageClassName="Top-Profile"/>)
                }
            </div>

        </div>

        <div className="Right-Page-Cards">
            <div className="Right-Page-Cards-1">
                <div className="Right-Page-Cards-Main">
                    <img src="" className="Right-Page-Cards-Main-Image" alt="MAIN IMAGE"/>
                </div>
                <h5 className="Right-Page-Cards-Title-Text">Weekly progress</h5>
                <p className="Right-Page-Cards-SP-Text">4/5 tasks done.</p>
            </div>

            <div className="Right-Page-Cards-1">
                <div className="Right-Page-Cards-Main">
                    <img src="" className="Right-Page-Cards-Main-Image" alt="MAIN IMAGE"/>
                </div>
                <h5 className="Right-Page-Cards-Title-Text">Weekly progress</h5>
                <p className="Right-Page-Cards-SP-Text">4/5 tasks done.</p>
            </div>

            <div className="Right-Page-Cards-1">
                <h5 className="Right-Page-Cards-Title-Text">Weekly progress</h5>
                <div className="Right-Page-Cards-Main">
                    <img src="" className="Right-Page-Cards-Main-Image" alt="MAIN IMAGE"/>
                </div>
            </div>
        </div>


        <div className="Right-Page-Date-Title">
            <h4 className="Right-Page-Date-Title-Text">September 2022</h4>
            <div className="Right-Page-Date-Title-Icons">
                <IconContext.Provider value={{color: "#1e1d2f", className: "Right-Page-Title-Icon"}}>
                    <div>
                        <FaChevronLeft/>
                    </div>
                </IconContext.Provider>

                <IconContext.Provider value={{color: "#1e1d2f", className: "Right-Page-Title-Icon"}}>
                    <div>
                        <FaChevronRight/>
                    </div>
                </IconContext.Provider>
            </div>
        </div>

        <div className="Right-Page-Date-Cards">
            {
                dateCard.map(item => <DateCard dayName={item.dayName} dayNumber={item.dayNumber}
                                               isActive={item.isActive} onClick={item.onClick}/>)
            }
        </div>

        <div className="Right-Page-Webinars-Title">
            <h4>Webinars</h4>
            <p>See all</p>
        </div>

        <div className="Right-Page-Webinars-Card">
            {
                webinars.map(item => <WebinarsFullCard title={item.title} subTitle={item.subTitle} time={item.time}
                                                       bgColor={item.bgColor} icon={item.icon}/>)
            }
        </div>

    </div>
}

const profileUrls = [
    "https://images.pexels.com/photos/2846602/pexels-photo-2846602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1982852/pexels-photo-1982852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
]


const dateCard: DateCardProps[] = [
    {
        dayName: "Sun", dayNumber: 2, isActive: false, onClick: () => {
        }
    },
    {
        dayName: "Mon", dayNumber: 3, isActive: true, onClick: () => {
        }
    },
    {
        dayName: "Tue", dayNumber: 4, isActive: false, onClick: () => {
        }
    },
    {
        dayName: "Wed", dayNumber: 5, isActive: false, onClick: () => {
        }
    },
    {
        dayName: "Thur", dayNumber: 6, isActive: false, onClick: () => {
        }
    },
    {
        dayName: "Fri", dayNumber: 7, isActive: false, onClick: () => {
        }
    },
    {
        dayName: "Sat", dayNumber: 8, isActive: false, onClick: () => {
        }
    },
]

const webinars = [
    {title: "Color theory: the color wheel", subTitle: "3 Sep | 8pm", time: "1h", bgColor: "", icon: <FaFootballBall/>},
    {title: "Revisiting the Double Diamond", subTitle: "3 Sep | 6pm", time: "2h", bgColor: "", icon: <FaPinterest/>},
    {title: "Lupsom Unar", subTitle: "15 Sep | 2pm", time: "4h", bgColor: "", icon: <FaBell/>},
    {title: "Upsom Unar", subTitle: "19 Oct | 9pm", time: "2h", bgColor: "", icon: <FaBell/>},
]