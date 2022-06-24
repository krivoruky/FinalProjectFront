import React from 'react';
import s from './MarkFooter.module.sass';

export default function MarkFooter({ children }) {
  return <div className={s.markFooter}>{children}</div>;
}
