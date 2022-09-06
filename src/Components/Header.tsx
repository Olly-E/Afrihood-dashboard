import { SiElasticsearch } from 'react-icons/si';
import { BsBank } from 'react-icons/bs';
import { BsCoin } from 'react-icons/bs';
import {BiSearch} from 'react-icons/bi';
import {BsChatLeftTextFill} from 'react-icons/bs';
import {BsFillGrid3X3GapFill} from 'react-icons/bs';
import {BiUserCircle} from 'react-icons/bi';
import {IoMdNotifications}  from 'react-icons/io'
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderNav>
        <NameLabel>
        <div>
            <SiElasticsearch  />
            <h3>Ark</h3>
        </div>
        <div>
            <BsBank />
            <h3>Assets</h3>
        </div>
        <div>
            <BsCoin />
            <h3>Account</h3>
        </div>
        </NameLabel>
        <IconLabel>
            <div>
                <input type="text" placeholder='Search'/>
                <BiSearch size={25} color='#1D1B1B' />
            </div>
            <IoMdNotifications size={30}/>
            <BsChatLeftTextFill size={30}/> 
            <BsFillGrid3X3GapFill size={30}/>
            <BiUserCircle size={30}/>
        </IconLabel>
    </HeaderNav>
  )
}

export default Header

const HeaderNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.7rem;
    background-color: #1D1B1B;
    color: white;
    padding: 1rem 5rem;
    position: sticky;
    top: 0;
`;
const NameLabel = styled.div`
    display: flex;
    gap: 3rem;
    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        h3{
            font-weight: 500;
        }
    }
`
const IconLabel = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
    div {
        display: flex;
        align-items: center;
        background: white;
        border-radius: 0.5rem;
        overflow: hidden;
        padding-right: 0.3rem;
        input {
            height: 2rem;
            width: 15rem;
            border: none;
            padding: 0.5rem;
            box-sizing: border-box;
            font-size: 1rem;
            outline: none;
            padding-left: 1rem;
        }
    }
`;