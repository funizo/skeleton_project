import React from 'react';
import DaumPostcode from 'react-daum-postcode';

const Post = ({ setcompany, onComplete, subaddress }) => {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }
    // console.log(data);
    // console.log(fullAddress);
    // console.log(data.zonecode);
    // console.log(subaddress);

    // fullAddress + usbaddress 값 input 주소에 추가
    if (subaddress) {
      fullAddress += ` ${subaddress}`;
    }
    // 주소 정보전달
    if (onComplete && typeof onComplete === 'function') {
      onComplete({ address: fullAddress,subaddress });
    }
  };

  return (
    <div>
      <DaumPostcode className="postmodal" autoClose onComplete={handleComplete} />
    </div>
  );
};

export default Post;
