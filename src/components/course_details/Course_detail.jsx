import React, { useEffect } from "react";
import { Card } from "../Elements";
import { useState } from "react";

function SignupCard() {
    <>
        <div className="flex flex-col bg-white shadow-lg top-6 absolute rounded-md" style={{ marginLeft: "300px", width: "400px" }}>

        </div>
    </>
}

function ForgotCard(props) {
    const { loginButton , loginFunc } = props;
    return (
        <div className="shadow-lg bg-white top-6 absolute rounded-md" style={{ width: "500px", marginLeft: "300px" }}>
            <div className="flex justify-center text-black text-2xl font-semibold p-4">Forgot Password?</div>
            <div className="text-xs text-black px-4 mb-2">Registered Contact Number or Email</div>
            <input type="text" className="mx-4 mb-4 rounded-lg border-2 border-gray-300 p-2 focus:outline-none text-black focus:border-2 focus:border-blue-300" style={{ width: "95%" }} />
            <button className="text-white bg-blue-500 rounded-lg mx-4 flex justify-center p-2" style={{ width: "95%" }}>Continue</button>
            <button className="flex justify-center text-blue-500 bg-white shadow-transparent p-2 m-2" style={{ width: "95%" }} onClick={loginFunc}>Go back to log in.</button>
            {loginButton && (<LoginCard />)}
        </div>
    )
}
function LoginCard(props) {

    const { forgotFunc, signupFunc, SignupButton, ForgotButton } = props;
    const [isOpen, setIsOpen] = useState(false);

    const toggleButton = () => {
        setIsOpen(!isOpen);
    }

    let Buttontitle = "Show";
    if (isOpen) {
        Buttontitle = "Hide";
    }
    return (
        <div className=" flex flex-col bg-white shadow-lg  absolute top-6 rounded-md" style={{ marginLeft: "300px", width: "500px" }}>
            <div className="text-black text-2xl font-semibold flex justify-center p-4">Log In</div>
            <label htmlFor="" className="text-xs text-black px-4 mt-4 mb-2">Email Address / Contact Number</label>
            <input type="text" className=" mx-4 mb-4 rounded-lg border-2 border-gray-300 p-2 focus:outline-none text-black  focus:border-2 focus:border-blue-300" />
            <label htmlFor="" className="text-xs text-black px-4 mb-2">Email Address / Contact Number</label>
            <div className="flex flex-row mb-1 items-center justify-center">
                <input type="text" className="ml-4 rounded-l-md border-2 border-gray-300 p-2   focus:outline-none text-black w-auto focus:border-2 focus:border-blue-300 " style={{ width: "90%" }} />
                <button className="bg-gray-400 text-black border-2 border-gray-400 rounded-r-md mr-4 px-4 py-2 " onClick={() => toggleButton()}>{Buttontitle}</button>
            </div>
            <div className="inline-flex justify-between items-center py-3 mx-4">
                <div className="inline-flex items-center">
                    <input type="checkbox" className="h-3 w-3" />
                    <div className="text-black text-xs ml-2">Keep Me Logged In</div>
                </div>
                <button className="text-blue-500 text-xs" onClick={forgotFunc}>Forgot Password?</button>
                {ForgotButton && (<ForgotCard />)}
            </div>
            <button className="bg-blue-500 rounded-md px-2 py-2 mx-4 text-white">Log In</button>
            <span className="text-black text-xs flex items-center justify-center mb-10">By Signing up, you accept our <a href="" className="text-blue-500 px-1">  terms and conditions  </a> and <a href="" className="text-blue-500 px-1"> privacy policy </a></span>
            <div className="text-black text-md flex justify-center mb-4">Coming for the first time?
                <button className="text-blue-500 px-1" onClick={() => signupFunc()}>Sign Up Now!</button>
                {SignupButton && (
                    <SignupCard />
                )}
            </div>
        </div>
    )
}

export default function Course_detail() {
    useEffect(() => {
        document.title = "course - detail"
    }, [])

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);

    const [isEnrolledButtonOpen, setIsEnrolledButton] = useState(false);
    const [isForgotButtonclicked, setIsForgotButtonClicked] = useState(false);
    const [isSignupButtonClicked, setIsSignupButtonClicked] = useState(false);

    const toggleSignupButton = () => {
        setIsEnrolledButton(false);
        setIsSignupButtonClicked(!isSignupButtonClicked);
        setIsForgotButtonClicked(false);
    }

    const toggleForgotButton = () => {
        setIsEnrolledButton(false);
        setIsSignupButtonClicked(false);
        setIsForgotButtonClicked(!isForgotButtonclicked);
    }

    const toggleEnrolledButton = () => {
        setIsForgotButtonClicked(false);
        setIsSignupButtonClicked(false);
        setIsEnrolledButton(!isEnrolledButtonOpen);
    }
    const toggleButton1 = () => {
        setIsOpen1(!isOpen1);
    }
    const toggleButton2 = () => {
        setIsOpen2(!isOpen2);
    }
    const toggleButton3 = () => {
        setIsOpen3(!isOpen3);
    }
    const toggleButton4 = () => {
        setIsOpen4(!isOpen4);
    }
    const toggleButton5 = () => {
        setIsOpen5(!isOpen5);
    }

    const toggleButton6 = () => {
        setIsOpen6(!isOpen6);
    }
    return (
        <>
            <div className="bg-cover bg-center h-300px flex" style={{ backgroundImage: `url('/background-books.jpeg')` }}>
                <div className="container text-white pl-60 pt-20">
                    <h1 className="text-4xl font-bold mb-10">Bhakti Vaibhav Online (Module-2)</h1>
                    <div className="text-md font-semibold mb-10">By ISKCON Bhagavata Mahavidyalaya (BV Eng)</div>
                    <div className="flex flex-row mb-10">
                        <img src="/rupee-icon.png" className="h-7 w-7 mb-5" alt="" />
                        <div className="font-semibold text-3xl text-white ml-2 -mt-2">5100</div>
                        <img src="/certi-badge.png" alt="" className="w-5 h-5 ml-7 mt-1" />
                        <div className="text-yellow-500 text-xs font-semibold ml-3 mt-1">Certificate Course</div>
                    </div>
                    <button className="bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 border-2 border-blue-500 px-7 py-2 mb-10" onClick={() => toggleEnrolledButton()}>Enroll Now</button>
                    {isEnrolledButtonOpen ? (
                        <><LoginCard /></>
                    ) : isForgotButtonclicked ? (<><ForgotCard forgotFunc={toggleEnrolledButton()} ForgotButton ={isEnrolledButtonOpen} /></>) : isSignupButtonClicked ? (<SignupCard />)   :(<></>)
                    }

                </div>
            </div>

            <div className="flex flex-row p-6 bg-white justify-center">
                <div className="flex flex-col items-center p-2">
                    <div className="font-semibold text-black text-lg mb-1">Course Duration</div>
                    <div className="text-black">Approx 8 Months</div>
                </div>
                <hr class="border-gray-300 h-auto border-l-2 ml-4 mr-4 " />
                <div className="flex flex-col items-center p-2">
                    <div className="font-semibold text-black text-lg mb-1">Videos</div>
                    <div className="text-black">2 Hours</div>
                </div>
                <hr class="border-gray-300 h-auto border-l-2 ml-4 mr-4 " />
                <div className="flex flex-col items-center p-2">
                    <div className="font-semibold text-black text-lg mb-1">No. Of Sessions</div>
                    <div className="text-black">Approx 135</div>
                </div>
                <hr class="border-gray-300 h-auto border-l-2 ml-4 mr-4 " />
                <div className="flex flex-col items-center p-2">
                    <div className="font-semibold text-black text-lg mb-1">Sessions per week</div>
                    <div className="text-black">4</div>
                </div>
                <hr class="border-gray-300 h-auto border-l-2 ml-4 mr-4 " />
                <div className="flex flex-col items-center p-2">
                    <div className="font-semibold text-black text-lg mb-1">Language</div>
                    <div className="text-black">English</div>
                </div>
                <hr class="border-gray-300 h-auto border-l-2 ml-4 mr-4 " />
                <div className="flex flex-col items-center p-2">
                    <div className="font-semibold text-black text-lg mb-1">Eligibility</div>
                    <div className="text-black">Bhakti Shastri Certified</div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center bg-gray-50 py-10">
                <div className="max-w-auto shadow-xl px-20 py-6 bg-white rounded-lg mb-20">
                    <div className="flex flex-col">
                        <div className="text-black font-semibold text-2xl pb-10">Schedule of Classes</div>
                        <div className="flex flex-row pb-10">
                            <div className="flex flex-row items-center mr-40">
                                <img src="/calendar-icon.png" alt="" className="bg-gray-300 p-4 w-20 h-20 rounded-lg" />
                                <div className="flex flex-col">
                                    <div className="text-blue-500 text-md pl-5 font-semibold">Starts on Sep 25</div>
                                    <div className="text-black text-md pl-5 font-semibold">Sep 25, 2023 - May 13, 2024</div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center">
                                <img src="/clock-icon.png" alt="" className="bg-gray-300 p-4 w-20 h-20 rounded-lg" />
                                <div className="flex flex-col">
                                    {/* <div className="text-blue-500 text-md pl-5">Starts on Sep 25</div> */}
                                    <div className="text-black font-semibold text-md pl-5">07:00 PM to 09:00 PM IST <br />

                                        Regular classes on <br />
                                        Monday to Thursday</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="text-blue-500 font-semibold ">View Detailed Schedule</div>
                            <img src="/arrow-blue-icon.png" className="w-3 h-3 mt-2 ml-2 bg-white" alt="" />
                        </div>
                    </div>
                </div>

                <div className="max-w-200 bg-white shadow-xl p-10 rounded-xl">
                    <div className="flex flex-row max-w-10 justify-between">
                        <div className="flex flex-col items-center">
                            <img src="/user-icon.png" className="h-20 w-20" alt="" />

                            <div className="text-black text-xl font-semibold">ISKCON <br /> Bhagavata <br /> Mahavidyalaya <br /> (BV Eng)</div>
                        </div>
                        <div className="text-black font-semibold text-2xl w-">About the Teacher</div>
                    </div>
                </div>
            </div>

            <div className="bg-blue-50 py-10 pl-60">
                <div className="max-w-2xl">
                    <div className="text-2xl font-semibold text-black">Course Overview</div>
                    <div className="underline text-md text-black py-4 font-semibold">Course Description:</div>
                    <span className="text-xs text-black mr-40 font-lg">Join us for a comprehensive study of Cantos 1 to 6 of the Srimad Bhagavatam in the upcoming Bhakti Vaibhava batch. This course is divided into two modules. Module 1 covers Canto 1, 2, and 3, while Module 2 covers Canto 4, 5, and 6. Successful completion of all assessments in Modules 1 and 2 will earn you a Bhakti Vaibhav degree from the ISKCON Board of Exams.</span>
                    <div className="underline text-md text-black py-4 font-semibold">Eligibility:</div>
                    <span className="text-xs text-black mr-40 font-lg">To pursue this course, you must have completed the Bhakti Sastri course and hold a Bhakti Sastri certificate issued by the ISKCON Board of Examination.</span>
                    <div className="underline text-md text-black py-4 font-semibold">Course Materials:</div>
                    <span className="text-xs text-black mr-40 font-lg">Institute will provide you a comprehensive Students' Handbook.</span>
                    <div className="underline text-md text-black py-4 font-semibold">Course Duration:</div>
                    <span className="text-xs text-black mr-40 font-lg">The approximate duration of the course is 500 hours.</span>
                    <div className="underline text-md text-black py-4 font-semibold">Target Audience:</div>
                    <span className="text-xs text-black mr-40 font-lg">This course is open to all devotees who have a Bhakti-shastri certification and are enthusiastic about furthering their scriptural studies with the Srimad-Bhagavatam. It is in accordance with Srila Prabhupada's desire that all ISKCON devotees undertake the Bhakti-Vaibhava certification.</span>
                    <div className="underline text-md text-black py-4 font-semibold">Assessment Plan:</div>
                    <span className="text-xs text-black mr-40 font-lg">The assessments will include open book questions, closed book exams for each unit, sloka recitation, and four presentations covering Cantos 1 to 6.</span>
                    <div className="underline text-md text-black py-4 font-semibold">Course Requirements:</div>
                    <span className="text-xs text-black mr-40 font-lg">To be eligible for the Bhakti Vaibhav degree, you must meet the following requirements:</span>
                    <div className="underline text-md text-black py-4 font-semibold">Age: <span className="text-xs no-underline text-black mr-40 font-lg"></span></div>

                    <div className="underline text-md text-black py-4 font-semibold">Daily Sadhana: <span className="text-xs no-underline text-black mr-40 font-lg">Chant a minimum of 16 rounds of the Hare Krishna maha-mantra and follow the four regulative principles.</span></div>

                    <div className="underline text-md text-black py-4 font-semibold">Bhakti Sastri Certificate: <span className=" no-underline text-xs text-black mr-40 font-lg">Hold a Bhakti Sastri certificate from any authorized ISKCON center issued by the ISKCON Board of Examinations.</span></div>

                    <div className="underline text-md text-black py-4 font-semibold">Prior Preparation: <span className="no-underline text-xs text-black mr-40 font-lg">It is recommended to read all six cantos before the course begins for a better understanding and maximum benefit.</span></div>

                    <div className="underline text-md text-black py-4 font-semibold">Proficiency in English: <span className="text-xs no-underline text-black mr-40 font-lg">As the course will be conducted in English, a good command of the language is mandatory.</span></div>

                    <div className="underline text-md text-black py-4 font-semibold">Attendance: <span className="text-xs no-underline text-black mr-40 font-lg">Maintain a minimum of 75% attendance in live sessions as per ISKCON Board of Examination rules.</span></div>

                    <div className="underline text-md text-black py-4 font-semibold">Recommendation Letter: <span className="text-xs no-underline text-black mr-40 font-lg">Please submit a recommendation letter from an ISKCON authority (your Spiritual Master/GBC member/Temple President/Co-President) who knows you well, certifying your character, sadhana, Brahminical tendencies, and active engagement in Lord Caitanya Mahaprabhu's preaching mission for at least the previous 12 months.</span> </div>


                    <div className="underline text-md text-black py-4 font-semibold"></div>
                    <span className="text-xs text-black mr-40 font-lg"></span>
                    <div className="underline text-md text-black py-4 font-semibold"></div>
                    <span className="text-xs text-black mr-40 font-lg"></span>
                    <div className="underline text-md text-black py-4 font-semibold"></div>
                    <span className="text-xs text-black mr-40 font-lg"></span>

                </div>
            </div>

            <div className="bg-white flex flex-col px-60 py-10">
                <div className="text-black text-2xl font-semibold">Frequently Asked Questions</div>
                <button onClick={() => toggleButton1()} className="border-2 border-gray-200 bg-white max-w-5xl  p-2 rounded-lg my-4">
                    <div className="flex flex-col">
                        <div className="flex flex-row justify-between">
                            <div className="text-blue-500 font-semibold mr-20">How to attend a live session ?</div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="10px"
                                viewBox="0 0 512 512"
                                className={`ml-2 mt-2 mr-2 ${isOpen1 ? '' : 'rotate-180'}`}
                                style={{
                                    transition: 'transform 0.10s ease',
                                }}
                            >
                                <path
                                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                                />
                            </svg>
                        </div>
                        {isOpen1 && (
                            <>
                                <div className="m-0 p-0 flex flex-col max-w-md -ml-2 shadow-transparent">
                                    <div className="text-black text-md">1. Login into your account from <a className="text-blue-500" href="https://www.vedvarsity.com">https://www.vedvarsity.com</a></div>
                                    <div className="text-black text-md mr-2">2. The live classes section is on the right side of the screen.</div>
                                </div>
                            </>
                        )}
                    </div>
                </button>

                <button onClick={() => toggleButton2()} className="border-2 border-gray-200 bg-white max-w-5xl  p-2 rounded-lg my-4">
                    <div className="flex flex-col">
                        <div className="flex flex-row justify-between">
                            <div className="text-blue-500 font-semibold mr-20">How to attend a live session ?</div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="10px"
                                viewBox="0 0 512 512"
                                className={`ml-2 mt-2 mr-2 ${isOpen2 ? '' : 'rotate-180'}`}
                                style={{
                                    transition: 'transform 0.10s ease',
                                }}
                            >
                                <path
                                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                                />
                            </svg>
                        </div>
                        {isOpen2 && (
                            <>
                                <div className="m-0 p-0 flex flex-col max-w-md -ml-2 shadow-transparent">
                                    <div className="text-black text-md">1. Login into your account from <a className="text-blue-500" href="https://www.vedvarsity.com">https://www.vedvarsity.com</a></div>
                                    <div className="text-black text-md mr-2">2. The live classes section is on the right side of the screen.</div>
                                </div>
                            </>
                        )}
                    </div>
                </button>

                <button onClick={() => toggleButton3()} className="border-2 border-gray-200 bg-white max-w-5xl  p-2 rounded-lg my-4">
                    <div className="flex flex-col">
                        <div className="flex flex-row justify-between">
                            <div className="text-blue-500 font-semibold mr-20">How to attend a live session ?</div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="10px"
                                viewBox="0 0 512 512"
                                className={`ml-2 mt-2 mr-2 ${isOpen3 ? '' : 'rotate-180'}`}
                                style={{
                                    transition: 'transform 0.10s ease',
                                }}
                            >
                                <path
                                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                                />
                            </svg>
                        </div>
                        {isOpen3 && (
                            <>
                                <div className="m-0 p-0 flex flex-col max-w-md -ml-2 shadow-transparent">
                                    <div className="text-black text-md">1. Login into your account from <a className="text-blue-500" href="https://www.vedvarsity.com">https://www.vedvarsity.com</a></div>
                                    <div className="text-black text-md mr-2">2. The live classes section is on the right side of the screen.</div>
                                </div>
                            </>
                        )}
                    </div>
                </button>

                <button onClick={() => toggleButton4()} className="border-2 border-gray-200 bg-white max-w-5xl  p-2 rounded-lg my-4">
                    <div className="flex flex-col">
                        <div className="flex flex-row justify-between">
                            <div className="text-blue-500 font-semibold mr-20">How to attend a live session ?</div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="10px"
                                viewBox="0 0 512 512"
                                className={`ml-2 mt-2 mr-2 ${isOpen4 ? '' : 'rotate-180'}`}
                                style={{
                                    transition: 'transform 0.10s ease',
                                }}
                            >
                                <path
                                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                                />
                            </svg>
                        </div>
                        {isOpen4 && (
                            <>
                                <div className="m-0 p-0 flex flex-col max-w-md -ml-2 shadow-transparent">
                                    <div className="text-black text-md">1. Login into your account from <a className="text-blue-500" href="https://www.vedvarsity.com">https://www.vedvarsity.com</a></div>
                                    <div className="text-black text-md mr-2">2. The live classes section is on the right side of the screen.</div>
                                </div>
                            </>
                        )}
                    </div>
                </button>

                <button onClick={() => toggleButton5()} className="border-2 border-gray-200 bg-white max-w-5xl  p-2 rounded-lg my-4">
                    <div className="flex flex-col">
                        <div className="flex flex-row justify-between">
                            <div className="text-blue-500 font-semibold mr-20">How to attend a live session ?</div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="10px"
                                viewBox="0 0 512 512"
                                className={`ml-2 mt-2 mr-2 ${isOpen5 ? '' : 'rotate-180'}`}
                                style={{
                                    transition: 'transform 0.10s ease',
                                }}
                            >
                                <path
                                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                                />
                            </svg>
                        </div>
                        {isOpen5 && (
                            <>
                                <div className="m-0 p-0 flex flex-col max-w-md -ml-2 shadow-transparent">
                                    <div className="text-black text-md">1. Login into your account from <a className="text-blue-500" href="https://www.vedvarsity.com">https://www.vedvarsity.com</a></div>
                                    <div className="text-black text-md mr-2">2. The live classes section is on the right side of the screen.</div>
                                </div>
                            </>
                        )}
                    </div>
                </button>

                <button onClick={() => toggleButton6()} className="border-2 border-gray-200 bg-white max-w-5xl  p-2 rounded-lg my-4">
                    <div className="flex flex-col">
                        <div className="flex flex-row justify-between">
                            <div className="text-blue-500 font-semibold mr-20">How to attend a live session ?</div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="10px"
                                viewBox="0 0 512 512"
                                className={`ml-2 mt-2 mr-2 ${isOpen6 ? '' : 'rotate-180'}`}
                                style={{
                                    transition: 'transform 0.10s ease',
                                }}
                            >
                                <path
                                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                                />
                            </svg>
                        </div>
                        {isOpen4 && (
                            <>
                                <div className="m-0 p-0 flex flex-col max-w-md -ml-2 shadow-transparent">
                                    <div className="text-black text-md">1. Login into your account from <a className="text-blue-500" href="https://www.vedvarsity.com">https://www.vedvarsity.com</a></div>
                                    <div className="text-black text-md mr-2">2. The live classes section is on the right side of the screen.</div>
                                </div>
                            </>
                        )}
                    </div>
                </button>

            </div>

            <div className="flex flex-col px-40 m-10 ml-4">
                <div className='text-black-500 text-3xl font-semibold mb-10 '>Related Courses</div>
                <Card time={"5 minutes"} />
            </div>

        </>
    );
}