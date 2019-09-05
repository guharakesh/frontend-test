import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Title from './Title';
import Text from '../../Text';
import Dot from '../../Dot';
import Rating from '../../Rating';
import Context from '../../Context';
import { is_open_selector } from '../../../utils';

const Result = (
  {
    restaurant: {
      categories,
      name,
      price,
      image_url,
      rating,
      id,
      hours,
    },
  }
) => {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    const get_data = async () => {
      const result = await fetch(`/api/restaurant?id=${id}`);
      const data = await result.json();
      const { error } = data;
      if (error) {
        setTimeout(get_data, 200);
      } else {
        dispatch({ type: 'UPDATE_RESTAURANT', id, restaurant: data });
      }
    }
    get_data();
  }, [id]);

  const { is_open_now } = hours ? hours.find(({ hours_type }) => hours_type === 'REGULAR') : {};
  const check_is_open = is_open_selector(state);

  const { title: category } = categories[0]
  return (
    <div className="container">
      <div className="placeholder">
        <img src={image_url} />
      </div>
      <div className="title">
        <Title>{name}</Title>
      </div>
      <div className="stars">
        <Rating rating={rating} />
      </div>
      <div className="meta">
        <div className="name">
          <Text
            size={12}
            font="HelveticaNeue"
            color="#757575"
          >
            {`${category.toUpperCase()} • ${price}`}
          </Text>
        </div>
        <div className="open">
          <Dot closed={!check_is_open(id)} />
          <Text
            size={12}
            color="#757575"
            font="HelveticaNeue"
          >
            {check_is_open(id) ? 'OPEN NOW' : 'CLOSED'}
          </Text>
        </div>
      </div>
      <Link href={`/restaurant/${id}`}>
        <div className="learn">
          <Text
            size={14}
            color="white"
            font="HelveticaNeue"
          >
            {'LEARN MORE'}
          </Text>
        </div>
      </Link>
      <style jsx>{`
        .container {
          margin-right: 32px;
          margin-bottom: 80px;
          overflow: hidden;
        }
        .title {
          height: 64px;
          width: 304px;
        }
        img {
          width: 304px;
          height: 228px;
          background-color: #D8D8D8;
          margin-bottom: 16px;
          object-fit: cover;
        }
        .stars {
          margin-top: 8px;
          margin-bottom: 16px;
        }
        .meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .learn {
          margin-top: 20px;
          width: 304px;
          height: 48px;
          background-color: #002B56;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .dot {
          height: 8px;
          width: 8px;
          border-radius: 4px;
          background-color: #00E8A4;
          margin-right: 4px;
        }
        .open {
          display: flex;
          align-items: center;
        }
        .name {
          max-width: 200px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>
    </div>
  );
}

export default Result;