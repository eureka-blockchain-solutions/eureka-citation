import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import './slick.css';
import Ink from 'react-ink';

const Item = styled.div`
  position: relative;
`;

const Slick = ({items, more, moreLink, ...otherProps}) => {
  return (
    <Carousel {...otherProps}>
      {items.map((item, i) => {
        return (
          <Item key={i}>
            <Ink />
            {item.image ? <img src={item.image} /> : null}
            <Link to={item.link}>
              <div className="legend">
                <div className="legendText"> {item.legend}</div>
              </div>
            </Link>
          </Item>
        );
      })}
      <Item>
        <Link to={moreLink}>
          <div className="legend">
            <div className="legendText">{more}</div>
          </div>
        </Link>
      </Item>
    </Carousel>
  );
};

export default Slick;
