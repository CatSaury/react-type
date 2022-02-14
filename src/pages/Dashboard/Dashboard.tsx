import React, { useEffect } from 'react';
import { API } from '../../utils'

type Props = {};

export function Dashboard({}: Props) {

  useEffect(() => {
    API.get('/home/swiper').then(res => {
      console.log(res);
    })
  }, [])

  return <div>dashboard</div>;
}
