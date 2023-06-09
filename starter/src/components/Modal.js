import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";
function Modal() {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Removal all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            confirm
          </button>
          <button
            onClick={() => {
              dispatch(closeModal());
            }}
            className="btn clear-btn"
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Modal;
