// SettingsDrawer 컴포넌트의 스타일드 컴포넌트들

import styled from "styled-components";

export const DrawerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease;
`;

export const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 500px;
  height: 100vh;
  background: white;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease;
  z-index: 2001;
  overflow-y: auto;
`;

export const DrawerHeader = styled.div`
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f9fa;
`;

export const DrawerTitle = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    background: #e0e0e0;
    color: #333;
  }
`;

export const DrawerContent = styled.div`
  padding: 24px;
`;

export const SettingGroup = styled.div`
  margin-bottom: 32px;
`;

export const SettingLabel = styled.label`
  display: block;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  font-size: 0.9rem;
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  background: white;
  cursor: pointer;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

export const NumberInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
`;

export const AutoRotationInfo = styled.div`
  background: #e8f4fd;
  border: 1px solid #b3d9ff;
  border-radius: 8px;
  padding: 12px;
  margin-top: 12px;
  font-size: 0.85rem;
  color: #0066cc;
`;

export const JsonSchemaContainer = styled.div`
  margin-top: 24px;
`;

export const JsonSchemaTitle = styled.h3`
  margin: 0 0 12px 0;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
`;

export const MonacoContainer = styled.div`
  height: 500px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
`;

export const ApiResponseContainer = styled.div`
  margin-top: 24px;
`;

export const ApiResponseTitle = styled.h3`
  margin: 0 0 12px 0;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ApiButton = styled.button`
  background: #667eea;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 16px;

  &:hover:not(:disabled) {
    background: #5a6fd8;
    transform: translateY(-1px);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

export const LoadingSpinner = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ResponseStatus = styled.div`
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SuccessStatus = styled(ResponseStatus)`
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
`;

export const ErrorStatus = styled(ResponseStatus)`
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
`;

export const ResponseMonacoContainer = styled.div`
  height: 400px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  margin-top: 12px;
`;

