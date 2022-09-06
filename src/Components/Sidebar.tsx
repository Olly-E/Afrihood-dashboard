import styled from 'styled-components';
import {MdEdit} from 'react-icons/md';
import {AiOutlineGlobal} from 'react-icons/ai';
import {BiTimeFive} from 'react-icons/bi';
import {MdAddCircleOutline} from 'react-icons/md';
import {MdOutlineInventory2} from 'react-icons/md';
import {HiViewGridAdd} from 'react-icons/hi'
import rec from '../Imgs/rec.png';
import React, { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {BiSearch} from 'react-icons/bi';
import {FaTimes} from 'react-icons/fa';
import food from '../Imgs/food.png';
import {AiTwotoneStar} from 'react-icons/ai';


interface Props {
    activeNav?: boolean
    activeNav2?: boolean
     sidebarToggle: boolean
     sidebarToggle2: boolean
     handleClick: () => void
     handleClick2: () => void
  }

const Sidebar:React.FC<Props> = ({activeNav, activeNav2, sidebarToggle, sidebarToggle2, handleClick, handleClick2}) => {
    // const[activeNav, setActiveNav] = useState(true);
    // const[activeNav2, setActiveNav2] = useState(false);
    // const [sidebarToggle, setSidebarToggle] = useState(true);
    // const [sidebarToggle2, setSidebarToggle2] = useState(false);
    
 
    // const handleClick = () => {
    //     setActiveNav(true)
    //     setActiveNav2(false)
    //     setSidebarToggle(true)
    //     setSidebarToggle2(false)
    // }
    // const handleClick2 = () => {
    //     setActiveNav2(true)
    //     setActiveNav(false)
    //     setSidebarToggle2(true);
    //     setSidebarToggle(false)
    // }

    
  


  return (
    
    <SidebarDiv>
        <PatToggle>
            <span onClick={() => handleClick()} className={`${activeNav ? 'activeNav' : ''}`}>Patronise</span>
            <span  onClick={() => handleClick2()} className={`${activeNav2 ? 'activeNav' : ''}`}>Bid</span>
        </PatToggle>
        {sidebarToggle && <SidebarToggle>
        <div>
            <EditCat>
            <span>My Categories</span><IconEdit><MdEdit size={13}/></IconEdit>
            </EditCat>
            
            <p>Other-Admin Support
            Personal/Virtual Assistant
            Web Research
            Pro
            </p>
        </div>
        <div>
            <EditCat>
            <span>Visibility</span><IconEdit><MdEdit size={13}/></IconEdit>
            </EditCat>
            
            <PublicIcon><AiOutlineGlobal /><p>Public</p></PublicIcon>
        </div>
        <div>
            <EditCat>
            <span>Availability</span><IconEdit><MdEdit size={13}/></IconEdit>
            </EditCat>
            
            <PublicIcon><BiTimeFive /><p>Public</p></PublicIcon>
        </div>
        <div>
            <EditCat>
            <span>Booth Completion</span><IconEdit><MdEdit size={13}/></IconEdit>
            </EditCat>
            <Rec>
            <img src={rec} alt="" />
            <img src={rec} alt="" />
            <img src={rec} alt="" />
            <span>100%</span>
            </Rec>
            <PublicIcon><MdAddCircleOutline color='white' /><p>Add Work history</p></PublicIcon>
        </div>
        <div>
            <EditCat>
            <span>Inventory</span><IconEdit><MdEdit size={13}/></IconEdit>
            </EditCat>
            
            <PublicIcon><MdOutlineInventory2 color='white' /><p>My Inventory</p></PublicIcon>
        </div>
        <div>
            <EditCat>
            <span>Bids</span><IconEdit><MdEdit size={13}/></IconEdit>
            </EditCat>
            <PublicIcon><HiViewGridAdd color='white' /><p>50 available connects</p></PublicIcon>
        </div>
        </SidebarToggle>}
        {sidebarToggle2 && <SidebarToggle2>
            <SearchMenu>
                <span>
                <GiHamburgerMenu />
                <input type="text" />
                </span>
           
                <div>
                    <BiSearch />
                    <p><FaTimes /></p>
                </div>
            </SearchMenu>
            <Selection>
                <span>Rating</span>
                <span>Hours</span>
                <span>MoreFilter</span>
            </Selection>
            <SectionCh>
                <div>
                <h3>Lesukaa Restaurant (Catering    
                Service & Food Delivery)</h3>
                <Starstruck>
                    <span>4.0</span>
                    <div>
                        <AiTwotoneStar style={{color: '#A14807'}}/>
                        <AiTwotoneStar style={{color: '#A14807'}}/>
                        <AiTwotoneStar style={{color: '#A14807'}}/>
                        <AiTwotoneStar style={{color: '#A14807'}}/>
                        <AiTwotoneStar style={{color: 'white'}}/>
                    </div>
                    <p>(39)</p>
                </Starstruck>
                <p>
                Restaurant  Plot 337 Peter Odili Road
                Abuloma Best
                Open 24 hours
                </p>
                
                <p style={{marginTop: '0.8rem', marginBottom: '0.8rem'}}>
                Dine-in  -  Takeaway  -  Delivery
                </p>
                </div>
                <div>
                <img src={food} alt="" />
                </div>
            </SectionCh>
            <SectionCh>
                <div>
                <h3>Lesukaa Restaurant (Catering    
                Service & Food Delivery)</h3>
                <Starstruck>
                    <span>4.0</span>
                    <div>
                        <AiTwotoneStar style={{color: '#A14807'}}/>
                        <AiTwotoneStar style={{color: '#A14807'}}/>
                        <AiTwotoneStar style={{color: '#A14807'}}/>
                        <AiTwotoneStar style={{color: '#A14807'}}/>
                        <AiTwotoneStar style={{color: 'white'}}/>
                    </div>
                    <p>(39)</p>
                </Starstruck>
                <p>
                Restaurant  Plot 337 Peter Odili Road
                Abuloma Best
                Open 24 hours
                </p>
                
                <p style={{marginTop: '0.8rem', marginBottom: '0.8rem'}}>
                Dine-in  -  Takeaway  -  Delivery
                </p>
                </div>
                <div>
                <img src={food} alt="" />
                </div>
            </SectionCh>
            <SectionCh>
                <div>
                <h3>Lesukaa Restaurant (Catering    
                Service & Food Delivery)</h3>
                <Starstruck>
                    <span>4.0</span>
                    <div>
                        <AiTwotoneStar style={{color: '#A14807'}}/>
                        <AiTwotoneStar style={{color: '#A14807'}}/>
                        <AiTwotoneStar style={{color: '#A14807'}}/>
                        <AiTwotoneStar style={{color: '#A14807'}}/>
                        <AiTwotoneStar style={{color: 'white'}}/>
                    </div>
                    <p>(39)</p>
                </Starstruck>
                <p>
                Restaurant  Plot 337 Peter Odili Road
                Abuloma Best
                Open 24 hours
                </p>
                
                <p style={{marginTop: '0.8rem', marginBottom: '0.8rem'}}>
                Dine-in  -  Takeaway  -  Delivery
                </p>
                </div>
                <div>
                <img src={food} alt="" />
                </div>
            </SectionCh>
            
        </SidebarToggle2>}
    </SidebarDiv>
  )
}

export default Sidebar




const SidebarDiv = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 3;
    background:#000000;
    color: white;
    height: 100vh;
    width: 28rem;
    position: fixed;
    box-sizing: border-box;
    font-size: 1rem;
    gap: 1.5rem;
`;
const PatToggle = styled.div`
    display: flex;
    background: white;
    color: #2C2C2C;
    padding: 0.3rem 0 0.3rem 0;
    box-sizing: border-box;
    border-radius: 5px;
    align-items: center;
    margin: 2rem 6rem 1rem 6rem;
    height: 3rem;
    overflow: hidden;
    padding: 0.3rem;
    .activeNav {
        color: white;
        background: #A14807;
        padding: 0.5rem 1rem;
        
    }
    span {
        padding: 0.7rem 1.4rem;
        width: 50%;
        text-align: center;
        font-weight: 700;
        border-radius: 5px;
        :hover {
            user-select: none;
            
        }
    }
`;
const EditCat = styled.div`
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    span {
        font-weight: 800;
        font-size: 1rem;
    }
`;

const Rec = styled.div`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    margin-top: 0.8rem;
    span {
        font-size: 0.6rem;
    }
`
const IconEdit = styled.span`
   color: white;
`;
const PublicIcon = styled.span`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: -0.5rem;
`;
const SidebarToggle = styled.div`
    padding: 3rem 5rem;
`
const SidebarToggle2 = styled.div`
    margin: 0 2rem;
    overflow: scroll;
    -ms-overflow-style: none;  
    scrollbar-width: none;  
    ::-webkit-scrollbar { 
    display: none;  
    
    }
`
const SearchMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.8rem;
    background: white;
    color: black;
    height: 2.3rem;
    border-radius: 0.4rem;
    overflow: hidden;
    padding-left: 0.8rem;
    
    span {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    input {
        border: none;
        outline: none;
        width: 8rem;
    }

    div {
        display: flex;
        align-items: center;
        background: #A14807;
        padding: 0.8rem;
        color: white;
        p {
            padding-left: 0.7rem;
            border-left: 1px solid white;
            height: fit-content;
            margin-left: 0.7rem;
        }
    }
`;

const Selection =  styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 1rem;
    gap: 0.3rem;
    span {
        padding: 0.3rem 0.9rem;
        border: 1px solid white;
        border-radius: 1rem;
        font-size: 0.8em;
    }
`
const Starstruck = styled.div `
    display: flex;
    align-items: center;
    margin: 0;
    line-height: 3rem;
    gap: 0.3rem;
    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const SectionCh = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
    border-top: 1px solid white;
    margin-left: -2rem;
    margin-right: -2rem;
    padding: 1rem 2rem;
    margin-top: 1rem;
    div{
        h3 {
            margin: 0;
        }
        p {
            margin: 0;
        }
    }
`;