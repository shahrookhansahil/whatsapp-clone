import React from 'react'
import { MdOutlineGroups2, MdDonutLarge } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";



function ContactList() {
  return (
    <div id='contactlis'>
        <div id='home'>
            <img src='https://media.licdn.com/dms/image/D4D03AQH1xJ9nt0JN3g/profile-displayphoto-shrink_800_800/0/1677254215406?e=2147483647&v=beta&t=UgNSSbKKg-sempUsADununpYCyhwALJHJ6qiAXxpNCg' id='pimg'/>
            <MdOutlineGroups2 className='icon'/>
            <MdDonutLarge className ="icon2"/>
            <BiMessageDetail className='icon2'/>
            <BsThreeDotsVertical className='icon2'/>
        </div>
        <div className='searchd'>
            <AiOutlineSearch className='icons'/>
            <textarea className='search'/>
        </div>
    </div>
    )
}

export default ContactList