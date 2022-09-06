import React,{useState} from 'react';
import styled from 'styled-components';
import {BiSearch} from 'react-icons/bi';
import Sidebar from '../Components/Sidebar';
import {IoMdThumbsDown} from 'react-icons/io'
import {AiOutlineHeart} from 'react-icons/ai'
import {FiCheckCircle} from 'react-icons/fi';
import {AiTwotoneStar} from 'react-icons/ai';
import {GrLocation} from 'react-icons/gr';
import map from '../Imgs/Map.png'

const Bid = () => {
  

 
    const[activeNav, setActiveNav] = useState<boolean>(true);
    const[activeNav2, setActiveNav2] = useState<boolean>(false);
    const [sidebarToggle, setSidebarToggle] = useState<boolean>(true);
    const [sidebarToggle2, setSidebarToggle2] = useState<boolean>(false);

  
    
 
    const handleClick = () => {
        setActiveNav(true)
        setActiveNav2(false)
        setSidebarToggle(true)
        setSidebarToggle2(false)
    }
    const handleClick2 = () => {
        setActiveNav2(true)
        setActiveNav(false)
        setSidebarToggle2(true);
        setSidebarToggle(false)
    }

  return (
    <BidContainer>
      <SidebarDiv>
        <Sidebar activeNav={activeNav} activeNav2={activeNav2} sidebarToggle={sidebarToggle} sidebarToggle2={sidebarToggle2} handleClick={handleClick} handleClick2={handleClick2}/>
      </SidebarDiv>
    <BidDiv style={{display: 'none'}}>
    <SearchSec>
      <SearchDiv>
        <input type="text" />
        <div><BiSearch size={30}/></div>
      </SearchDiv>
      <Adv>
        <p>Advanced Serch</p>
        <SpanDiv>
          <p>Sort</p>
          <Span1>Best Match</Span1>
          <Span1>Most Recent</Span1>
        </SpanDiv>
      </Adv>
      </SearchSec>
      <ContentDiv>
      <Content>
        <Cont1>
          <Head>
            <p>Need a graphic designer who can handle my social media</p>
            <LikeDiv>
              <span><IoMdThumbsDown/></span>  
              <span><AiOutlineHeart /></span>  
            </LikeDiv>
          </Head>
          <p>Hourly: $20.00-$30.00 - intermediate - Est. Time: Less than 1 month, Less than 30 hrs/week -
              Posted 1 hour ago</p>
          <p>I have a page called blurry_cosmos I want someone who can manage my account. I need a
            graphic designer and also creative.</p>
            <CatSpan>
              <span>Instagram</span>
              <span>Social Media imagery</span>
              <span>Graphic Design</span>
              <span>Adobe Photoshop</span>
            </CatSpan>
            <p style={{fontSize: '0.9rem'}}>Proposals: Less than 5</p>
            <PayDiv>
              <div>
                <FiCheckCircle/>
                <p>Payment unverified</p>
              </div>
              <Stars>
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
              </Stars>
              <p>10$ spent</p>
              <Location>
                <GrLocation />
                <span>India</span>
              </Location>
            </PayDiv>
        </Cont1>
      </Content>
      <Content>
        <Cont1>
          <Head>
            <p>Need a graphic designer who can handle my social media</p>
            <LikeDiv>
              <span><IoMdThumbsDown/></span>  
              <span><AiOutlineHeart /></span>  
            </LikeDiv>
          </Head>
          <p>Hourly: $20.00-$30.00 - intermediate - Est. Time: Less than 1 month, Less than 30 hrs/week -
              Posted 1 hour ago</p>
          <p>I have a page called blurry_cosmos I want someone who can manage my account. I need a
            graphic designer and also creative.</p>
            <CatSpan>
              <span>Instagram</span>
              <span>Social Media imagery</span>
              <span>Graphic Design</span>
              <span>Adobe Photoshop</span>
            </CatSpan>
            <p style={{fontSize: '0.9rem'}}>Proposals: Less than 5</p>
            <PayDiv>
              <div>
                <FiCheckCircle/>
                <p>Payment unverified</p>
              </div>
              <Stars>
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
              </Stars>
              <p>10$ spent</p>
              <Location>
                <GrLocation />
                <span>India</span>
              </Location>
            </PayDiv>
        </Cont1>
      </Content>
      <Content>
        <Cont1>
          <Head>
            <p>Need a graphic designer who can handle my social media</p>
            <LikeDiv>
              <span><IoMdThumbsDown/></span>  
              <span><AiOutlineHeart /></span>  
            </LikeDiv>
          </Head>
          <p>Hourly: $20.00-$30.00 - intermediate - Est. Time: Less than 1 month, Less than 30 hrs/week -
              Posted 1 hour ago</p>
          <p>I have a page called blurry_cosmos I want someone who can manage my account. I need a
            graphic designer and also creative.</p>
            <CatSpan>
              <span>Instagram</span>
              <span>Social Media imagery</span>
              <span>Graphic Design</span>
              <span>Adobe Photoshop</span>
            </CatSpan>
            <p style={{fontSize: '0.9rem'}}>Proposals: Less than 5</p>
            <PayDiv>
              <div>
                <FiCheckCircle/>
                <p>Payment unverified</p>
              </div>
              <Stars>
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
              </Stars>
              <p>10$ spent</p>
              <Location>
                <GrLocation />
                <span>India</span>
              </Location>
            </PayDiv>
        </Cont1>
      </Content>
      </ContentDiv>
    </BidDiv>
    <BidDiv2>
      <img src={map} alt="" />
    </BidDiv2>
    </BidContainer>
    
  )
}


export default Bid



const BidContainer = styled.div`
  background: white;
  display: flex;
  
`

const SidebarDiv = styled.div`
  flex: 0.8;
`
const BidDiv = styled.div`
  flex: 2;
  margin: 0 9rem 0 4rem;
`;
const BidDiv2 = styled.div`
  flex: 2;
  overflow: hidden;
  img {
    margin-left: -2rem;
  }
`
const ContentDiv = styled.div`
  box-shadow: 2px 2px 7px 3px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  padding: 2rem;
  margin-top: 2rem;
`;
const SearchSec = styled.div`
  position: sticky;
  top: 7rem;
  background: white;
  box-shadow: 2px 2px 7px 3px rgba(0, 0, 0, 0.06);
  padding: 1rem;
`;
const SearchDiv = styled.div` 
  display: flex;
  align-items: center;
  margin-top: 1.3rem;
  box-shadow: 2px 2px 7px 3px rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  overflow: hidden;
  max-height: 3rem;
  input {
    width: 100%;
    height: 2rem;
    gap: 1rem;
    padding: 0.5rem 1rem;
    outline: none;
    border: none;
  }
  div {
      background: #A14807;
      height: 100%;
      padding: 0.6rem;
      box-sizing: border-box;
      color: white;
    }
`
const SpanDiv = styled.div`
      display: flex;
      gap: 1rem;
      align-items: center;
      p {
        color: #A14807;
        font-weight: 700;
      }
`;
 const Span1 = styled.span`
  color: #000000;
  border: 1px solid #000000;
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
 `
const Adv =  styled.div` 
  p {
        color: #A14807;
        font-weight: 700;
  }
`
const Content = styled.div`
  padding-bottom: 2rem;
  border-bottom: 1px solid #4b4a4a;
`;

const Cont1= styled.div`
  
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

const LikeDiv = styled.div`
  display: flex;
  gap: 1.5rem;
  span {
    border: 1px solid #686868;
    padding-top: 5px;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 50%;
  }
`
const CatSpan = styled.div`
  display: flex;
  gap: 1rem;
  span {
    color: #4b4a4a;
    background-color: #C4C4C4;
    padding: 0.3rem 0.6rem;
    font-size: 0.8rem;
    border-radius: 0.6rem;
  }
`;
const PayDiv = styled.div`
 display: flex;
 align-items: center;
 justify-content: flex-start;
 font-size: 0.9rem;
 gap: 3rem;
 div{
  display: flex;
  align-items: center;
  gap: 5px;
 }
`
const Stars = styled.div`
  display: flex;
  color: #C4C4C4;
`;
const Location = styled.div`
  display: flex;
  gap: 0.6rem;
`