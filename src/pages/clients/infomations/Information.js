import React, { useState } from 'react'
// import { navigateTo } from '../../utils/navigates/navigate'
import logoBzw from '../../../assets/images/logo.png'
import InformationDisplay from '../../../components/infomations/InformationDisplay'
import SaveButton from '../../../components/buttons/SaveButton';

const Information = ({setCurrentPath}) => {

  const [information, setInformation] = useState('Initial Information');

  const handleInformationChange = (newInformation) => {
    setInformation(newInformation);
  };

  const handleClick = () => {
    alert('Nguyễn Đắc Phương!');
  }

  return (
    <div className='w-[1440px] flex flex-col gap-4 p-4'>
      <h1 className='text-4xl'>Thông tin chi tiết tài khoản</h1>
      <div>
        <img className='' src={logoBzw} alt="" />
      </div>
      <InformationDisplay
        information={information}
        onInformationChange={handleInformationChange}
      />
      <SaveButton typeButton={'button'} handleClick={handleClick} />
    </div>
  )
}

export default Information