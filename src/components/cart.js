import React, { useState, useEffect } from 'react';
import Toolbar from './toolbar';

// 차후 onRemove 찜 해제로 사용
const Cart = ({ cartItems, onRemove }) => {
  const items = cartItems || [];

  const learning = [
    {
      id: 1,
      title: '학습지 해법국어',
      writer: '천재교육',
      price: 4000,
      img: "/img/learning/learning1.jpg",
      quantity: 1,
    },
    {
      id: 2,
      title: '일본어 진짜학습지',
      writer: '시원스쿨닷컴',
      price: 6000,
      img: "/img/learning/learning2.jpg",
      quantity: 1,
    },
  ];

  const [cart, setCart] = useState(items);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // 컴포넌트가 렌더링될 때마다 total price를 계산하여 업데이트
    setTotalPrice(calculateTotalPrice());
  }, [cart]); // cart가 업데이트 될 때마다 useEffect 실행

  const handleIncrement = (itemId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      );
      return updatedCart;
    });
  };

  const handleDecrement = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const calculateTotalPrice = () => {
    const cartPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const learningPrice = learning.reduce((total, item) => total + item.price * item.quantity, 0);
    return cartPrice + learningPrice;
  };

  return (
    <div className="cart-container">
      <Toolbar />

      {learning.length === 0 ? (
        <p>찜 목록이 비어 있습니다.</p>
      ) : (
        <>
        </>
      )}

      {/* 장바구니가 비어있지 않을 때 */}
      {learning.length > 0 && (
        <div>
          <h3>장바구니</h3>
          {learning.map((item) => (
            <div key={item.id}>
              <img src={item.img} alt={item.title} style={{ maxWidth: '100px', maxHeight: '100px' }} />
              <p>{item.title}</p>
              <p>수량: {item.quantity}</p>
              <p>가격: ${item.price}</p>
              {/* <button onClick={() => onRemove(item.id)}>Remove</button>
              <button onClick={() => handleIncrement(item.id)}>+</button>
              <button onClick={() => handleDecrement(item.id)}>-</button>
              장바구니 버튼 제거 (차후 필요시 재사용) */}
            </div>
          ))}
          {/* 총 구매 가격 */}
          <div className="cart-total">
            <p>총 구매 가격: ${totalPrice}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
