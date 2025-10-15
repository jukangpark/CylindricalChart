import React, {
  useState,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from "react";
import {
  DropdownButton,
  DotsContainer,
  Dot,
  DropdownMenu,
  DropdownItem,
  DropdownWrapper as DropdownWrapperStyled,
} from "./ChartContainerStyle.ts";

const DropdownWrapper = forwardRef(({ onMenuItemClick }, ref) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  const closeDropdown = useCallback(() => {
    setIsDropdownOpen(false);
  }, []);

  const handleMenuItemClick = useCallback(
    (action) => {
      console.log(`Menu item clicked: ${action}`);
      closeDropdown();
      if (onMenuItemClick) {
        onMenuItemClick(action);
      }
    },
    [closeDropdown, onMenuItemClick]
  );

  useImperativeHandle(ref, () => ({
    toggleDropdown,
    closeDropdown,
  }));

  return (
    <DropdownWrapperStyled>
      <DropdownButton onClick={toggleDropdown}>
        <DotsContainer>
          <Dot />
          <Dot />
          <Dot />
        </DotsContainer>
      </DropdownButton>
      <DropdownMenu isOpen={isDropdownOpen}>
        <DropdownItem onClick={() => handleMenuItemClick("settings")}>
          설정
        </DropdownItem>
      </DropdownMenu>
    </DropdownWrapperStyled>
  );
});

export default DropdownWrapper;
