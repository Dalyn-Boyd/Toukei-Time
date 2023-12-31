import { ReactNode } from 'react';

export type WindowProps = { children?: ReactNode } & WindowTitleProps;
export type WindowTitleProps = { English: string; Japanese: string };
export type StyledButtonProps = { label: string };
export type NotepadProps = { children?: ReactNode };
