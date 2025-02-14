import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoBackButton } from '../components/StyledComponents';  

const FinalReport = () => {
  const navigate = useNavigate();  
  const goBack = () => {
    navigate('/');  
  };

  return (
    <div>
      <GoBackButton onClick={goBack}>Go Back</GoBackButton>  
    </div>
  );
};

export default FinalReport ;
