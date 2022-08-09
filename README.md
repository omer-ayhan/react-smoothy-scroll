# react-smoothy-scroll

<a href="https://www.npmjs.com/package/react-smoothy-scroll"><img src="https://img.shields.io/badge/0.9.2-%20npm-brightgreen" alt="NPM version"></a>

### Smooth scrolling for React.js with easy to use component

#

### Installation

##### With Yarn

```bash
 yarn add react-smoothy-scroll
```

##### With NPM

```bash
npm i react-smoothy-scroll
```

### Basic Usage

```js
import SmoothScroll from "react-smoothy-scroll";

<SmoothScroll toId="navbar" duration={1500} allowScroll={true}>
	<p>Scroll To Navbar</p>
</SmoothScroll>;
```

### Properties

| Prop        |  Default  |    Type     | Description                            |
| :---------- | :-------: | :---------: | :------------------------------------- |
| toId        | undefined |  `string`   | target id for smooth scrolling         |
| toRef       |   null    | `RefObject` | target ref object for smooth scrolling |
| duration    |   1000    |  `number`   | duration of the smooth scroll          |
| children    | undefined | `ReactNode` | react children                         |
| allowScroll |   true    |   `bool`    | if `false` scrolling will be disabled  |

<br/>

> Inspired by [Filip Kubík](https://www.ackee.agency/blog/scroll-to-element-with-react-and-vanilla-javascript)
