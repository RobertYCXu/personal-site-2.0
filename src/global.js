import { createGlobalStyle } from 'styled-components';
import Home from './pages/Home';
import About from './pages/About';
import Travels from './pages/Travels';
import Blog from './pages/Blog';
import Resume from './pages/Resume';
import Ideas from './pages/Ideas';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.primaryDark};
    height: 100vh;
    text-rendering: optimizeLegibility;
    font-family: 'Open Sans', sans-serif;
  }

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 4rem;
    font-weight: 700;
    cursor: pointer;
  }

  h1:after {
    content: '';
    display: block;
    border-bottom: 0.8rem solid ${({ theme }) => theme.primaryAccent};
		width: 40px;
    transition: width 250ms ease-in-out;

  }

  h1:hover:after {
    width: 100%;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  #main-menu {
    z-index: 1000;
  }

  small {
    display: block;
  }

  a {
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
  }

  p {
    font-size: 20pt;
    line-height: 2;
  }

  .page {
    z-index: -99;
    height: 100%;
    width: 100%;
  }

  .page-enter {
    opacity: 0;
    transform: scale(1.1);
  }

  .page-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 300ms, transform 300ms;
  }

  .page-exit {
    opacity: 1;
    transform: scale(1);
  }

  .page-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }

  .container {
    position: relative;
    height: 100%;
    width: 100%;
  }
`

export const routes = [
  { path: '/', name: 'home', Component: Home },
  { path: '/about', name: 'about', Component: About },
  { path: '/travels', name: 'travels', Component: Travels },
  { path: '/blog', name: 'blog', Component: Blog },
  { path: '/ideas', name: 'ideas', Component: Ideas },
  { path: '/resume', name: 'resume', Component: Resume }
]
