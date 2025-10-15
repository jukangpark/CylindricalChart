import styled from "styled-components";

// Props 타입 정의
interface DropdownMenuProps {
  isOpen: boolean;
}

interface PageButtonProps {
  disabled: boolean;
}

export const Container = styled.div`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 24px;
  margin: 20px 0;
  border: 1px solid #e0e0e0;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const Header = styled.div`
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    width: 4px;
    height: 24px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    margin-right: 12px;
    border-radius: 2px;
  }
`;

export const Content = styled.div`
  position: relative;
  min-height: 200px;
`;

export const DropdownButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  transition: all 0.2s ease;

  &:hover {
    background: #f5f5f5;
    color: #333;
  }

  &:active {
    background: #e0e0e0;
  }
`;

export const DotsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Dot = styled.div`
  width: 4px;
  height: 4px;
  background: currentColor;
  border-radius: 50%;
`;

export const DropdownMenu = styled.div<DropdownMenuProps>`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 8px 0;
  min-width: 160px;
  z-index: 1000;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transform: ${(props) =>
    props.isOpen ? "translateY(0)" : "translateY(-10px)"};
  transition: all 0.2s ease;
`;

export const DropdownItem = styled.button`
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  color: #333;
  font-size: 14px;
  transition: background 0.2s ease;

  &:hover {
    background: #f5f5f5;
  }

  &:active {
    background: #e0e0e0;
  }
`;

export const DropdownWrapper = styled.div`
  position: relative;
`;

export const PageNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 16px;
`;

export const PageButton = styled.button<PageButtonProps>`
  background: ${(props) => (props.disabled ? "#f0f0f0" : "#667eea")};
  color: ${(props) => (props.disabled ? "#999" : "white")};
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: #5a6fd8;
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;

export const PageInfo = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  min-width: 50px;
  text-align: center;
`;
