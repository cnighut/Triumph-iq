import React, {useRef, useState} from 'react'
import Navbar  from '../components/navbar';
import { IoMdMail } from "react-icons/io";
import Pbs from '../components/Pbs';
import Problems from '../problems';
import Sol from '../components/Sol';
import Solution from '../solution';
import image1 from "../assets/Graph.png"
import frameimage from "../assets/frame.png"
import gradient from "../assets/Vector 15.svg"
import Collage0 from "../assets/collage0.png"
import Collage1 from "../assets/collage1.png"
import Collage2 from "../assets/collage2.png"
import Collage3 from "../assets/collage3.png"
import bgImg from "../assets/bgImg.png"


function Home() {

  const contactRef = useRef(null);
  const homeref = useRef(null);

  
  

  function scroll() {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function scroll2() {
    homeref.current?.scrollIntoView({behavior : "smooth"});
  }



  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); 

    let url =
      "https://script.google.com/macros/s/AKfycbwKZNM-LkrhBD-S4m1R38AiO-DEvhmvEOjDln8UE4PHzzragphdSPZk_E_4QHIbmpH2/exec";

    let formBody = `email=${encodeURIComponent(email)}`; 

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formBody,
    })
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        alert("Submitted successfully!");
        setEmail("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }



  return (
    <div>
          
          <div className='overflow-hidden w-[393px]  md:w-full  h-[460px] md:min-h-[960px] relative' style={{background:" linear-gradient(180deg, #F9F7FF 0%, #EEE8FF 100%)"}}>

             
          
          <div className='w-[94.43px] h-[93.06px] md:w-[346px] md:h-[341px] absolute right-0'>
            <img className='object-contain' src={gradient} alt="" />
          </div>
          
          <div>
              <Navbar scroll1 = {scroll} scroll2 = {scroll2}/>
          </div>

          <div  ref = {homeref} className=' w-full h-full md:h-[780px] md:mt-16 flex flex-col gap-[15px] md:gap-[30px] items-center pt-[10px] pb-[10px] pr-[20px] pl-[20px]'>

            {window.screen.width > 748?
            <div className=' md:h-[210px] md:w-full flex flex-col items-center' >
              
              <div className= ' md:w-[137px]  md:h-[16px] '><span className='font-Roboto font-medium  md:text-[12px] text-center '>Built by CSM’s, for CSM’s</span></div>

              <div className="flex mt-3 md:mt-0  ">

                <div className=" relative inline-block ml-2 md:ml-0">
                  <img src={bgImg} className=" md:w-[270.11px]  md:h-[99.4px]" alt="background " />
                  <span className="absolute inset-0 text-center font-Roboto font-semibold  md:text-[65px]">
                    Simplify
                  </span>
                </div>
                
                <div className="text-center font-Roboto font-semibold  md:text-[65px] md:pl-3 ">Your Customer Success</div>
              </div>
                  
                <h4 className='text-center font-Roboto font-semibold  md:text-[65px] mt-[-10px] '>And Reduce Churn</h4> 
            </div>:
            <div className='w-[353px] h-[112px]  flex flex-col items-center' >
              
            <div className= 'w-[115px]  h-[5px]  '><span className='font-Roboto font-medium text-[10px]  text-center '>Built by CSM’s, for CSM’s</span></div>

            <div className="flex mt-5 md:mt-0  ">

              <div className=" relative inline-block ml-2 ">
                <img src={bgImg} className="w-[121.58px]  h-[46.36px]" alt="background " />
                <span className="absolute inset-0 text-center font-Roboto font-bold text-[30px] ">
                  Simplify
                </span>
              </div>
              
              <div className="text-center font-Roboto font-bold text-[30px]  md:pl-3 ">Your Customer </div>
            </div>
                
              <h4 className='text-center font-Roboto font-bold text-[30px]  mt-[-10px] '>Success And Reduce </h4> 
              <h4 className='text-center font-Roboto font-bold text-[30px]  mt-[-10px] '>Churn </h4> 
          </div>
            }
            
            
            
            <div className='md:pl-96 md:pr-96 mt-3 md:mt-[-20px]  '> <p className='text-[12px] md:text-[16px] font-Roboto  italic text-center text-gray-900'>“After years of managing customer relationships through disconnected tools and spreadsheets, I knew there had to be a better way. That's why we are building Triumph IQ” – Founder, Triumph IQ</p></div>

          
            <div  className='w-[288.18px] md:w-full h-[28px] flex justify-center items-center  md:mt-4 gap-[2.18px] md:gap-2 '>
            
            <form onSubmit={handleSubmit} className="flex items-center gap-[2.18px] md:gap-2  pl-4" netlify>
              
              <div className='w-[173px] md:w-full h-[28px] md:h-[58px] border-[1px] border-purple-100 rounded-xl flex items-center gap-1 md:pl-4 pl-[7px] pr-[3.55px] pt-[5.46px] pb-[5.46px]  bg-white'>
                <IoMdMail className="text-[#6938ef] w-[10px] md:w-[23px] h-[10px] md:h-[23px]" />
                <input
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className=" text-black w-[173px] md:w-[368px] h-[28px] md:h-[56px] font-Roboto text-[10px] md:text-[16px] font-medium rounded-xl outline-none bg-transparent  focus:ring-0 focus:outline-none autofill:bg-transparent placeholder:font-Roboto placeholder:md:text-[14px] placeholder:text-[10px] placeholder:font-medium placeholder:text-gray-700 placeholder:text-opacity-80  "
                  type="email"
                  placeholder="Enter your Email"
                  required
                />
                </div>
                
              <button
                type="submit"
                className="md:pl-3 md:pr-3 p-[8px] bg-[#6938ef] w-[113px] md:w-full h-[28px] md:h-[56px] font-Roboto text-[10px] md:text-[16px] text-white font-medium rounded-xl active:scale-95 transition-transform border-[1.5px]-black"
              >
                <span className='font-normal' >Request Early Access</span>
              </button>
              
            </form>
            
            
              
            </div>

            <div className='w-[350px] md:w-[1120px] h-[132px] md:min-h-[419px]  flex items-end absolute bottom-0 '>
              <img className='w-full h-auto max-h-full object-contain ' src={Collage0} alt="" />
            </div>

          </div>
          
        </div>

          <div className='w-[393px] md:w-full pr-[8.87px] pl-[8.87px] pb-[13.31px]'>
            <div className='text-center w-[full] h-[60px] md:h-[85px] mt-5'>
              <h3 className='text-[24px] md:text-[45px] font-Roboto font-bold'>Customer Success Is Tough!</h3>
            </div>
            
            <div className='  flex flex-wrap content-center justify-center gap-8 w-full   md:mt-4 xl:mt-10  '>
              {Problems.map((items) => {
                return (
                  <Pbs image = {items.image} id = {items.id} heading = {items.header} description = {items.description}/>  
                )
              })}
            </div>  
          </div>    
              
            
        
          <div style={{background:'rgb(245,242,255)'}} className='w-[393px] md:w-full h-[590px] md:h-[419px]  p-[0.5em] mt-[20px] md:mt-24 pl-[33.54px]  pr-[33.54px]'  >    
            
            <div className='text-center w-full h-[74px] md:h-[85px] mt-[12px] md:mt-[25px]  '>
              <h3 className='text-[24px] md:text-[45px] font-Roboto font-bold text-[rgba(16,16,16,1)]'>That’s why we are building Triumph IQ</h3>
            </div>
          
          
            <div className='flex flex-wrap content-center justify-center gap-[15px] md:gap-[25px] w-[full] h-[443px] md:h-[227.88px] mt-[25px] overflow-hidden '>
                {Solution.map((items) => {
                  return (
                    <Sol  image = {items.image} id = {items.id} heading = {items.header} description = {items.description}/>
                  )
                })}
            </div>

          </div>
        

        <div className='w-[393px]  h-[780.24px] md:h-[850px] md:w-full mt-14 flex flex-col items-center'>
              <div className='pt-4 w-full h-[65px]'>
                <h3 className='text-[24px]  md:text-[45px] font-Roboto font-bold text-center text-[rgba(16,16,16,1)]'>Features That Transform Your Customer Success</h3>
              </div>
              
              <div className='flex flex-wrap justify-center content-center gap-[15px] md:gap-[40px] pt-[21.6px] md:pt-[40px] pr-[20px] md:pr-[30px] w-full mt-4 md:mt-16 pl-[20px] pb-[21.6px]'>
                <div  className = ' w-[353px] h-[300px] md:w-[684px] md:h-[570px] rounded-2xl'>
                  <img src={Collage1} className="w-full h-full" alt="" />
                </div>
                
                <div className='w-[353px] md:w-[548px] h-[371.93px] md:h-[570px] rounded-2xl  flex flex-col gap-[10px] md:gap-[30px]  '>
                  
                  <div className=' shadow-xl w-full h-[192px] md:h-[270px] flex flex-col gap-[10.83px] md:gap-[20px] p-[16.24px] md:p-[30px] bg-white/80 rounded-2xl border-[1px] border-purple-600/15'>
                    <div className='flex flex-col md:gap-[20px] gap-[5.14px] w-full'>
                      <h3 className='w-[320.52px] md:w-[488px] h-[21px] md:h-[35px] text-[rgba(16,16,16,0.8)] font-Roboto font-semibold text-[18px] md:text-[30px]'>Unified Data Management</h3>

                      <p className='font-Roboto font-normal w-[320.52px] md:w-[488px] h-[54px] md:h-[46px] text-[12px] md:text-[14px] text-[rgba(67,67,67,1)]'>Still juggling customer data across multiple platforms? You’re not alone—70% of companies do the same. But now, there’s a better way.</p>
                    </div>
                    
                    <div>
                      <ul className=' flex flex-col gap-1 md:gap-2 ' >
                        <li className='text-[12px] md:text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'> <span className='mr-[10px]'>✔️</span>Import and update customer data effortlessly</li>
                        <li className='text-[12px] md:text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Integrate with your existing data source</li>
                        <li className='text-[12px] md:text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Maintain real-time data accuracy</li>
                      </ul>
                    </div>

                  </div>

                  <div className='shadow-xl w-[353px] md:w-[548px] h-[270px] flex flex-col gap-[10.83px] md:gap-[20px] p-[16.24px] md:p-[30px] bg-white/80 rounded-2xl border-[1px] border-purple-600/15'>
                    <div className='flex flex-col gap-[5.41px] md:gap-[20px]'>
                      <h3 className='w-[320.54px] md:w-[488px] h-[19px] md:h-[35px] text-[rgba(16,16,16,0.8)] font-Roboto font-semibold text-[18px] md:text-[30px]'>Customizable, Yet Simple</h3>

                      <p className='font-Roboto font-normal w-[320.54] md:w-[488px] h-[32px] md:h-[46px] text-[12px] md:text-[14px] text-[rgba(67,67,67,1)]'>Unlike legacy tools that take 10-12 weeks to implement, we get you up and running fast.</p>
                    </div>
                    
                    <div>
                      <ul className=' flex flex-col gap-1 md:gap-2 ' >
                        <li className='text-[12px] md:text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'> <span className='mr-[10px]'>✔️</span>Customize Fields, Dashboards and Health Score easily
                        </li>
                        <li className='text-[12px] md:text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'> <span className='mr-[10px]'>✔️</span>Adapt the platform to fit your organization’s unique needs</li>


                        <li className='text-[12px] md:text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'> <span className='mr-[10px]'>✔️</span>No technical expertise required
                        </li>
                      </ul>
                    </div>

                  </div>
                  
                  
                </div>
              </div>
        </div>

        


         {window.screen.width > 768? 
                <div className='w-[393px] h-[880px]  md:h-[850px] md:w-full mt-10 '>
                      
                <div className='flex flex-wrap justify-center content-center gap-[1px] md:gap-[40px] md:pt-[40px] pt-[21.65px] pb-[21.65px] pr-[20px] pl-[20px] md:pl-[40px]  w-full'>
                  
                  
                  <div className='w-full md:w-[548px] h-[400px] rounded-2xl  flex flex-col gap-[10px] md:gap-[30px]  '>
                    
                  <div className='shadow-xl w-[353px] md:w-[548px] h-[193px] md:h-[270px] flex flex-col gap-[10.83px] md:gap-[20px] p-[16.24px] md:p-[30px] bg-white/80 rounded-2xl border-[1px] border-purple-600/15'>
                        <div className='flex flex-col gap-[5.41px] md:gap-[20px]'>
                          <h3 className='w-[320.52px]  md:w-[488px] h-[21px] md:h-[35px] text-[rgba(16,16,16,0.8)] font-Roboto font-semibold text-[18px] md:text-[30px]'>Manage customer communication</h3>

                          <p className='font-Roboto font-normal w-[320.52px] md:w-[488px] h-[54px] md:h-[46px] text-[12px] md:text-[14px] text-[rgba(67,67,67,1)]'>When should you reach out, or when was your last conversation? Still a question? Let Us Guide Your Customer Engagement and deliver maximum value.</p>
                        </div>
                        
                        <div>
                          <ul className=' md:mt-4 flex flex-col gap-[5.41px] md:gap-2' >
                            <li className='text-[12px] md:text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Automatically capture customer communications</li>
                            
                            <li className='text-[12px] md:text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Create engagement formulas to get the right alerts</li>
                            
                            <li className='text-[12px] md:text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Integrate easily with your communication platforms</li>
                            
                          </ul>
                        </div>

                      </div>

                      <div className=' shadow-xl w-[353px] md:w-[548px] h-[169px] md:h-[270px] flex flex-col gap-[10.83px] md:gap-[20px] p-[16.24px] md:p-[30px] bg-white/80 rounded-2xl border-[1px] border-purple-600/15'>
                        <div className='flex flex-col gap-[5.41px] md:gap-[20px]'>
                          <h3 className='w-[320.52px] md:w-[488px] h-[19px] md:h-[35px] text-[rgba(16,16,16,0.8)] font-Roboto font-semibold text-[16.24px] md:text-[30px]'>Predictive Churn Score</h3>

                          <p className='font-Roboto font-normal w-[320.52px] md:w-[488px] h-[32px] md:h-[46px] text-[12px] md:text-[14px] text-[rgba(67,67,67,1)]'>70% of CSMs find it difficult to assess customer health - leading to unexpected churn.</p>
                        </div>
                        
                        <div>
                          <ul className=' flex flex-col gap-[5.41px] md:gap-2 w-[304px]' >
                            <li className=' text-[12px] md:text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Track feature adoption, product usage for better visibility</li>
                            <li className='text-[12px] md:text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Setup custom risk formula - as per your needs</li>
                            <li className='text-[12px] md:text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Get actionable insights for at-risk accounts</li>
                            
                          </ul>
                        </div>

                      </div>
                    
                    
                  </div>
                  <div  className = 'w-[350px] h-[315px] md:w-[684px] md:h-[570px] rounded-2xl'>
                    <img src={Collage2} className="w-full h-full" alt="" />
                  </div>
                </div>
          </div> :

          <div className='w-[393px] h-[840px]  md:h-[850px] md:w-full mt-10 '>
                        
          <div className='flex flex-wrap justify-center content-center gap-[1px] md:gap-[40px] md:pt-[40px] pt-[21.65px] pb-[21.65px] pr-[20px] pl-[20px] md:pl-[40px]  w-full'>
          
            
            <div className='w-full md:w-[548px] h-[400px] rounded-2xl  flex flex-col gap-[10px] md:gap-[30px]  '>

            <div  className = 'w-[350px] h-[315px] md:w-[684px] md:h-[570px] rounded-2xl'>
              <img src={Collage2} className="w-full h-full" alt="" />
            </div>
              
            <div className='shadow-xl w-[353px] md:w-[548px] h-[193px] md:h-[270px] flex flex-col gap-[10.83px] md:gap-[20px] p-[16.24px] md:p-[30px] bg-white/80 rounded-2xl border-[1px] border-purple-600/15'>
                  <div className='flex flex-col gap-[5.41px] md:gap-[20px]'>
                    <h3 className='w-[320.52px]  md:w-[488px] h-[21px] md:h-[35px] text-[rgba(16,16,16,0.8)] font-Roboto font-semibold text-[18px] md:text-[30px]'>Manage customer communication</h3>

                    <p className='font-Roboto font-normal w-[320.52px] md:w-[488px] h-[54px] md:h-[46px] text-[12px] md:text-[14px] text-[rgba(67,67,67,1)]'>When should you reach out, or when was your last conversation? Still a question? Let Us Guide Your Customer Engagement and deliver maximum value.</p>
                  </div>
                  
                  <div>
                    <ul className=' md:mt-4 flex flex-col gap-[5.41px] md:gap-2' >
                      <li className='text-[12px] md:text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Automatically capture customer communications</li>
                      
                      <li className='text-[12px] md:text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Create engagement formulas to get the right alerts</li>
                      
                      <li className='text-[12px] md:text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Integrate easily with your communication platforms</li>
                      
                    </ul>
                  </div>

                </div>

                <div className=' shadow-xl w-[353px] md:w-[548px] h-[169px] md:h-[270px] flex flex-col gap-[10.83px] md:gap-[20px] p-[16.24px] md:p-[30px] bg-white/80 rounded-2xl border-[1px] border-purple-600/15'>
                  <div className='flex flex-col gap-[5.41px] md:gap-[20px]'>
                    <h3 className='w-[320.52px] md:w-[488px] h-[19px] md:h-[35px] text-[rgba(16,16,16,0.8)] font-Roboto font-semibold text-[16.24px] md:text-[30px]'>Predictive Churn Score</h3>

                    <p className='font-Roboto font-normal w-[320.52px] md:w-[488px] h-[32px] md:h-[46px] text-[12px] md:text-[14px] text-[rgba(67,67,67,1)]'>70% of CSMs find it difficult to assess customer health - leading to unexpected churn.</p>
                  </div>
                  
                  <div>
                    <ul className=' flex flex-col gap-[5.41px] md:gap-2 w-[304px]' >
                      <li className=' text-[12px] md:text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Track feature adoption, product usage for better visibility</li>
                      <li className='text-[12px] md:text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Setup custom risk formula - as per your needs</li>
                      <li className='text-[12px] md:text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Get actionable insights for at-risk accounts</li>
                      
                    </ul>
                  </div>

                </div>
              
              
            </div>
            
          </div>
          </div> 
        }

        <div className='w-[393px] md:w-full h-[820px] md:h-[850px]  mt-[-110px] flex flex-col items-center '>
              
              
              <div className='flex  flex-wrap justify-center content-center gap-[15px] pt-[21.65px] pb-[21.65px] pr-[20px] pl-[20px] md:gap-[40px] md:pt-[40px] md:pr-[30px] w-full'>
                <div className='w-[350px] h-[315px] md:w-[684px] md:h-[693px] rounded-2xl'>
                  <img src={Collage3} className="w-full h-full" alt="" />
                </div>
                
                <div className='w-[353px] md:w-[548px] h-[426.66px] md:h-[693px] rounded-2xl   flex flex-col gap-[10px] md:gap-[30px]  '>
                  
                  <div className='shadow-xl w-[353px] md:w-[548px] h-[144px] md:h-[211px] flex flex-col gap-[10.83px] md:gap-[3px] p-[16.24px] md:p-[30px] bg-white/80 rounded-2xl border-[1px] border-purple-600/15'>
                    <div className='flex flex-col gap-[10.83px] md:gap-[15px] '>
                      <h3 className='w-[320.52px] md:w-[488px] h-[21px] md:h-[35px] text-[rgba(16,16,16,0.8)] font-Roboto font-semibold text-[18px] md:text-[30px]'>Deal Management</h3>

                      
                    </div>
                    
                    <div className='md:mt-4 p-[]'>
                      <ul className=' flex flex-col gap-[5.41px] md:gap-2 ' >
                        <li className='text-[12px] md:text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Identify the right opportunity with a predictive upsell score</li>
                        
                        <li className='text-[12px] md:text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Create and Manage upsell and cross-sell opportunities
                        </li>
                        <li className='text-[12px] md:text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Monitor pipeline progress with intuitive visualizations
                        </li>
                      </ul>
                    </div>

                  </div>

                  <div className=' shadow-xl w-[353px] md:w-[548px] h-[132px] md:h-[211px] flex flex-col gap-[10.83px] md:gap-[3px] p-[16.24px] md:p-[30px] bg-white/80 rounded-2xl border-[1px] border-purple-600/15'>
                    <div className='flex flex-col gap-[15px] '>
                      <h3 className='w-[320px] md:w-[488px] h-[19px] md:h-[35px] text-[rgba(16,16,16,0.8)] font-Roboto font-semibold text-[16.24px] md:text-[30px]'>Success Plans</h3>

                      
                    </div>
                    
                    <div className='md:mt-4'>
                      <ul className=' flex flex-col gap-[5.41px] md:gap-2 ' >
                        <li className='text-[12px] md:text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Systematically document and track customer objectives
                        </li>
                        
                        <li className='text-[12px] md:text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Ensure goal visibility through team transitions

                        </li>
                        <li className='text-[12px] md:text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Instantly access historical context

                        </li>
                      </ul>
                    </div>

                  </div>


                  <div className='shadow-xl w-[353px] md:w-[548px] h-[132px] md:h-[211px] flex flex-col gap-[10.83px] md:gap-[3px] p-[16.24px] md:p-[30px] bg-white/80 rounded-2xl border-[1px] border-purple-600/15'>
                    <div className='flex flex-col gap-[10.83px] md:ap-[15px] '>
                      <h3 className='w-[320.52px] md:w-[495px] h-[19px] md:h-[35px] text-[rgba(16,16,16,0.8)] font-Roboto font-semibold text-[16.24px] md:text-[30px] '>Comprehensive Analytics Dashboard</h3>

                      
                    </div>
                    
                    <div className='md:mt-4'>
                      <ul className=' flex flex-col gap-[5.41px] md:gap-2' >
                        <li className='text-[12px] md:text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Get a unified view of all accounts</li>
                        
                        <li className='text-[12px] md:text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Quantify CSM impact on revenue
                        </li>
                        <li className='text-[12px] md:text-16px font-Roboto font-normal text-[rgba(67,67,67,0.8)] ml-[-5px]'><span className='mr-[10px]'>✔️</span>Track account growth metrics


                        </li>
                      </ul>
                    </div>

                  </div>
                  
                </div>
              </div>
        </div>
        
        <div className='w-[393px] md:w-full h-[227.44px] md:h-[539.16px] bg-[rgba(211,199,244,1)] mt-[1px] pt-[24.31px] pb-[24.31px] md:pt-[80px] md:pb-[80px] pr-[18.23px] md:pr-[20px] pl-[18.23px] md:pl-[20px] flex items-center justify-center rounded-3xl'>
          
          <div className='w-[356.54px] md:w-[1240px] h-[178.83px] md:h-[379.16px]  rounded-2xl bg-white  md:pt-[48px] md:pb-[48px] md:pr-[29px] md:pl-[29px] pt-[14.58px] pb-[14.58px] pr-[8.81pxpx] pl-[8.81pxpx] flex justify-between items-center shadow-lg'>
            
            <div className='w-full md:w-[588px] h-[149.66px] md:h-[260.7px] p-[4.86px] md:p-[16px] flex flex-col gap-[14px] md:gap-10 items-center'>
              <div className='flex flex-col gap-[8px] md:gap-6 items-center w-[329.19px] md:w-[566px]'>
                
                <div className='w-[329.19px] md:w-[566px] h-[46px] md:h-[94px]'>
                  <h3 className='font-Roboto font-bold text-[20px] md:text-[40px] text-[rgba(16,16,16,1)]'>Ready to Transform Your </h3>
                  <h3 className='font-Roboto font-bold text-[20px] md:text-[40px] text-[rgba(16,16,16,1)] mt-[-10px]'>Customer Success Operations? </h3>
                </div>

                <div className='h-[48.21px] md:h-[38.69px] w-[329.19px] md:w-[566px] '>
                  <p className=' font-Roboto text-[12px] md:text-[16px] text-[rgba(67,67,67,1)] font-normal'>Book a demo today and see how Triumph IQ can help you deliver exceptional customer experiences while driving business growth.</p>
                </div>

              </div>

              <div className='w-[329.19px] md:w-[566px] h-[28px] md:h-[48px] flex gap-[2.18px] md:gap-[10px] items-center'>
                <form onSubmit={handleSubmit} className='flex gap-3 items-center w-full h-full md:w-[556px]  ' netlify>
                    
                  <div className='w-[217px] md:w-full  h-[28px] md:h-[48px] border-[1px] border-[rgba(234,237,240,1)] pl-2  flex items-center gap-[8px] md:gap-4 rounded-lg bg-[rgba(248,249,250,1)]'>     
                    <div className='w-[14px] h-[14px]  p-[1px] flex items-center justify-center'>
                      <IoMdMail className='md:w-full w-[10.06px] md:h-full h-[10.06px] text-[#6938ef]' />
                    </div>  
                    <input name='email' value={email}  onChange={(e) => setEmail(e.target.value)}  className='bg-[rgba(248,249,250,1)] outline-none w-full  md:w-[340px] md:h-[45px] placeholder:font-Dm placeholder:text-[rgba(67,67,67,0,8)] placeholder:font-medium placeholder:md:text-[14px] placeholder:text-[10px] ' type="email" placeholder='Enter Your Email' />
                  </div>

                  <button type='submit' className='active:scale-95 transition-transform w-[130px] md:w-[180px] h-[28px] md:h-[48px] bg-[rgba(105,56,239,1)] md:pt-[15px] md:pb-[15px] md:pl-[20px] md:pr-[20px] p-[8px] rounded-xl md:rounded-2xl flex items-center justify-center'><span className='text-white font-Dm text-[10px] md:text-[14px] font-semibold w-[100px] md:w-[140px] h-[12px] md:h-[18px]'>Schedule Your Demo</span></button>
                </form>
                
                
              </div>

            </div>
            
            <div className='hidden w-[466.66px] h-[283.16px]  relative overflow-hidden md:block'>
              <img className='absolute top-[-96px] object-cover' src={image1} alt="" />
            </div>
          </div>

        </div>


       <div  ref={contactRef} className='md:mt-0 mt-[40px] w-[393px] md:w-full pt-[10px] pb-[10px] pr-[20px] pl-[20px] md:p-[64px] flex  gap-[100px]'>

          <div className='w-[353px]  md:w-[1312px] h-[55px] md:h-[100px]  md:ml-[70px] mt-[-20px] flex flex-col  gap-[8px] md:gap-[1px] '>
              
              
                <div className='w-full md:w-[420px] h-full flex items-center justify-center md:justify-start '>
                  <h2 className='font-Roboto font-bold text-[25px] md:text-[24px] '>Contact Us</h2>
                </div>

                <div className='w-[344.54px] md:w-[334px] h-[18px] md:h-full flex items-center justify-center md:justify-start '>
                  <a className='font-Roboto text-[15px] md:text-[20px] text-indigo-600 ' href="hello@triumphIQ.com">hello@triumphiq.com</a>
                </div>
              </div>
          

          <div>

          </div>
        </div>

        <hr className='border-1px border-[rgba(67,67,67,0.15)] mt-2 md:mt-0 w-[393px] md:w-full md:h-[15px]'/>


        <div className='w-[363px] md:w-full h-[20px] mt-2  md:mt-0 text-center md:mb-5 flex item-center justify-center ml-2'>
          <span className='font-Roboto font-normal text-[10px] md:text-[20px] text-gray-800'> Copyright © 2025 Triumph IQ</span>
        </div>

        

    </div>
  )
}

export default Home;




