import { Field, Form, ErrorMessage } from "formik";
import styled from "styled-components";

export const FormWrapper = styled(Form)`
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding: 20px;
  border-radius: ${p => p.theme.radii.md} ${p => p.theme.radii.md} 0 0;
  background-color: ${p => p.theme.colors.backgroundDark};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const FormLabel = styled.label`
  font-size: 16px;
  color: ${p => p.theme.colors.textWhite};
`;

export const FormInput = styled(Field)`
  width: 100%;
  padding: 10px;
  margin-top: 8px;
  font-size: 14px;
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.sm};
  color: ${p => p.theme.colors.textWhite};
  background-color: ${p => p.theme.colors.backgroundLight};
`;

export const FormBtn = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: ${p => p.theme.radii.sm};
  cursor: pointer;
  color: ${p => p.theme.colors.textWhite};
  background-color: ${p => p.theme.colors.primary};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${p => p.theme.colors.primaryHover};
  }
`;

export const ErrMessage = styled(ErrorMessage)`
  color: ${p => p.theme.colors.error};
  font-size: 12px;
  margin-top: 4px;
`;