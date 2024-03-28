import React from "react";

type SortingButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
};
function SortingButton({ children, isActive, onClick }: SortingButtonProps) {
  return (
    <button
      className={`sorting__button sorting__button--relevant ${
        isActive && "sorting__button--active"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default SortingButton;
