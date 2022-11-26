import React, { FC, useRef, useEffect } from "react";
import style from './social.module.scss';
import { getExtraClasses } from '@utils/common.util';
import cn from 'classnames'
import Image from 'next/image';

export const SocialMedia: FC<{ className?: string }> = ({ className }) => {
  const extraClasses = getExtraClasses(style, className);

  return (
    <ul className={cn(style.social_list, extraClasses)}>
      <li>
        <a href="https://www.youtube.com/hpym" target="_blank" rel="noreferrer"><span>Youtube</span></a>
      </li>
      <li>
        <a href="https://www.facebook.com/hpym/" target="_blank" rel="noreferrer"><span>Facebook</span></a>
      </li>
      <li>
        <a href="https://www.instagram.com/hpym/" target="_blank" rel="noreferrer"><span>instagram</span></a>
      </li>
      <li>
        <a href="https://www.twitter.com/hpym/" target="_blank" rel="noreferrer"><span>twitter</span></a>
      </li>
    </ul>
  )
}
