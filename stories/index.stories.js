import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import Home from '../pages/index';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import Filter from '../components/Filter';
import FilterInput from '../components/Filter/FilterInput';
import Radio from '../components/Filter/Radio';
import Button from '../components/Filter/Button';
import Dropdown from '../components/Filter/Dropdown';
import Checkbox from '../components/checkbox';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Pages', module)
  .add('home', () => <Home />)

storiesOf('Atoms', module)
  .add('header', () => <Header />)
  .add('hero', () => <Hero />)
  .add('nav', () => <Nav />)
  .add('filter', () => <Filter />)
  .add('filterInput', () => <FilterInput />)
  .add('radio', () => <Radio />)
  .add('button', () => <Button />)
  .add('dropdown', () => <Dropdown />)
  .add('checkbox', () => <Checkbox />)
