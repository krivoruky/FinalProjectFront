import React from 'react';
import s from './Skill.module.sass';

export default function Skill({ numberSkill, text }) {
  return (
    <div className={s.skill}>
      <h6>{numberSkill}</h6>
      <p>{text}</p>
    </div>
  );
}
